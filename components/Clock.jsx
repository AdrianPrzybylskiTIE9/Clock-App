import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CountryList from "../components/CountryList";

export default function Clock(props) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(CountryList[props.country])
  );


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString(CountryList[props.country]));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [props.country]);

  return (
    <View style={styles.clockContainer}>
      <Text style={[styles.timeText, { fontSize: props.fontSize }]}>
        {time}
      </Text>
    </View>
  );
}

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
