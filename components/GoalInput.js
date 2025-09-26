import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // clear input
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,              // ✅ Fix: let it expand in row layout
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
});
