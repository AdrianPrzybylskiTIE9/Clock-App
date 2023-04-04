import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Picker, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TimeZoneElement(props) {
  return (
    <View style={styles.elementContainer}>
      <Text style={styles.elementEmoji}>{props.emoji}</Text>
      <Text style={styles.elementText}>{props.name}</Text>
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
    fontSize: 22,
    fontWeight: "bold",
  },
  elementEmoji: {
    margin: 15,
    padding: 3,

    fontSize: 42,
    borderRadius: 5,

    color: "black",
    backgroundColor: "lightgray",
    opacity: 0.8,
  },
});
