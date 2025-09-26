import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ id, text, onDeleteItem }) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={() => onDeleteItem(id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#f52",
  },
  goalText: {
    color: "white",
    fontWeight: "500",
  },
  pressedItem: {
    opacity: 0.6,
  },
});
