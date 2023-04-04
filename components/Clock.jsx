import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("pl-PL"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("pl-PL"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.clockContainer}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
}
export default Clock;

const styles = StyleSheet.create({
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "15%",
    margin: 20,
    borderRadius: 15,

    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  timeText: {
    fontSize: 42,
    letterSpacing: 2,

    fontWeight: "bold",
    color: "black",
  },
});
