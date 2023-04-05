import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  StatusBar,
  Button,
  FlatList
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Clock from "../components/Clock";
import NewTimeZone from "../components/NewTimeZone";
import TimeZoneElement from "../components/TimeZoneElement";
import CountryList from "../components/CountryList";
import { SwipeListView } from "react-native-swipe-list-view";

export default function MainScreen({ navigation }) {
  const [country, setCountry] = useState("Polish");
  const [countries, setCountries] = useState(["Polish"]);

  console.log(country);

  useEffect(() => {
    AsyncStorage.getItem("countries")
      .then((value) => {
        if (value !== null) {
          setCountries(JSON.parse(value));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Save the count to AsyncStorage on every change
    AsyncStorage.setItem("countries", JSON.stringify(countries)).catch(
      (error) => console.log(error)
    );
  }, [countries]);



  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Clock country={country} fontSize={42} />
      </View>
      <Text style={styles.timeZoneText}>Time Zones</Text>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <TimeZoneElement name={item} setCountry={setCountry} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.timeZonesFlatList}
      />

      <NewTimeZone
        navigation={navigation}
        setCountries={setCountries}
        countries={countries}
      />
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
  timeZonesFlatList: {
    width: "100%",
    height: "70%",
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
