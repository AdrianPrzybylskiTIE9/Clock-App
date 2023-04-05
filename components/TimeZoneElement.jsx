import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Picker, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Clock from "./Clock";
import CountryList from "./CountryList";

function TimeZoneElement(props) {
  return (
    <View style={styles.elementContainer}>
      <Text style={styles.elementText}>{props.name}</Text>
      <View style={styles.clock}>
        <Clock country={CountryList[props.name]} fontSize={18} />
      </View>
    </View>
  );
}
export default TimeZoneElement;

const styles = StyleSheet.create({
  elementContainer: {
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    marginVertical: 5,
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
  elementText: {
    width: "40%",
    margin: 15,
    padding: 3,

    fontSize: 22,
    fontWeight: "bold",
  },
  clock: {
    width: '60%'
  },
});
