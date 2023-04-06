import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Clock(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: props.timeZone,
  };

  return (
    <View style={styles.clockContainer}>
      <Text style={[styles.timeText, { fontSize: props.fontSize }]}>
        {currentTime.toLocaleTimeString("PL-pl", { timeZone: props.timeZone })}
      </Text>
      <Text style={[styles.dateText, { fontSize: (props.fontSize/1.5) }]}>
        {currentTime.toLocaleDateString("PL-pl", options)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  timeText: {
    letterSpacing: 2,

    fontWeight: "bold",
    color: "black",
  },
  dateText: {
    // fontWeight: "bold",
    color: "black",
    fontSize: 1,
  },
});
