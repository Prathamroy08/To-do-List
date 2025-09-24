// import { useState } from "react";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,

    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GOAL SETTER</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          placeholderTextColor="#888"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.listContainer}>
        {/* <Text style={styles.listTitle}>List of Goals...</Text> */}
        {courseGoals.map((goal, index) => (
          <Text style={styles.listTitle} key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    paddingBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#673030",
    backgroundColor:'#f2f3f4',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#673030",
    width: "75%",
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  listContainer: {
    marginTop: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
