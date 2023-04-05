import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function newTimeZone(props) {
  return (
    <Pressable style={styles.elementContainer} onPress={() => {props.navigation.navigate("Add New Time Zone", {
      setCountries: props.setCountries,
      countries: props.countries,
    });}}>
      <AntDesign name="plus" style={styles.addIcon}/>
      <Text style={styles.addText}>Add new timezone</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  elementContainer: {
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    marginVertical: 15,
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
  addText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addIcon: {
    margin: 15,
    padding: 3,

    fontSize: 42,
    borderRadius: 5,

    color: "black",
    backgroundColor: "lightgray",
    opacity: 0.8,
  },
});
