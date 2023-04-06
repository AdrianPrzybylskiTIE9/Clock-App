import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Clock from "./Clock";
import TimeZonesList from "./TimeZonesList";

export default function TimeZoneElement(props) {
  console.log('-----------|');
  console.log(props.timeZone);

  return (
    <Pressable
      style={[
        styles.elementContainer,
        props.timeZone === props.currTimeZone && { borderColor: "#1468be" },
      ]}
      onPress={() => props.setTimeZone(props.timeZone)}
    >
      <Text
        style={[
          styles.elementText,
          props.timeZone === props.currTimeZone && { color: "#1468be" },
        ]}
      >
        {TimeZonesList[props.timeZone]}
      </Text>
      <View style={styles.clock}>
        <Clock timeZone={props.timeZone} fontSize={18} />
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
    borderWidth: 1,
    borderColor: 'white',

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
