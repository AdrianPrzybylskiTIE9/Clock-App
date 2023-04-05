import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Picker, StatusBar } from "react-native";
import Clock from "../components/Clock";
import NewTimeZone from "../components/NewTimeZone";
import TimeZoneElement from "../components/TimeZoneElement";
import CountryList from "../components/CountryList";

export default function MainScreen({navigation}) {
  const [country, setCountry] = useState("Poland");
  const [countries, setCountries] = useState(['Poland'])

  console.log(countries);

  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Clock country={`${CountryList[country]}`} fontSize={42} />
      </View>
      <Text style={styles.timeZoneText}>Time Zones</Text>
      <TimeZoneElement name={country} />
      <TimeZoneElement name={"United States of America"} />

      <NewTimeZone navigation={navigation} setCountries={setCountries} countries={countries}/>
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
  timeZoneText: {
    alignSelf: "flex-start",

    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",

    color: "black",
    opacity: 0.8,
  },
});
