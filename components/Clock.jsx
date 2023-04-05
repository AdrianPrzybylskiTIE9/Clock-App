import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function Clock(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString(props.country));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString(props.country));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.clockContainer}>
      <Text style={[styles.timeText, {fontSize: props.fontSize}]}>{time}</Text>
    </View>
  );
}
export default Clock;

const styles = StyleSheet.create({
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",
    
  },

  timeText: {
    letterSpacing: 2,

    fontWeight: "bold",
    color: "black",
  },
});
