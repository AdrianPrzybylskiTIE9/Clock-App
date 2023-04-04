import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Picker, StatusBar } from "react-native";
import Clock from "../components/Clock";
import NewTimeZone from "../components/NewTimeZone";
import TimeZoneElement from "../components/TimeZoneElement";

export default function MainScreen() {
  const [country, setCountry] = useState("Poland");

  return (
    <View style={styles.container}>
      <Clock />

      <Text style={styles.timeZoneText}>Time Zones</Text>
      <TimeZoneElement name={country} emoji={"🗿"} />
      <TimeZoneElement name={'USA'} emoji={"🦅"} />
      <NewTimeZone />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  timeZoneText: {
    alignSelf: "flex-start",

    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",

    color: "black",
    opacity: 0.8,
  },
});
