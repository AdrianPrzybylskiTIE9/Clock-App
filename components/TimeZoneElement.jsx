import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Clock from "./Clock";
import CountryList from "./CountryList";

export default function TimeZoneElement(props) {
  return (
    <Pressable
      style={styles.elementContainer}
      onPress={() => props.setCountry(props.name)}
    >
      <Text style={styles.elementText}>{props.name}</Text>
      <View style={styles.clock}>
        <Clock country={props.name} fontSize={18} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  elementContainer: {
    alignItems: "center",
    flexDirection: "row",

    // width: "100%",
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 15,

    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
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
