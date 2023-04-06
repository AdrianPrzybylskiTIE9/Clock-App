import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Clock from "../components/Clock";
import NewTimeZone from "../components/NewTimeZoneButton";
import TimeZoneElement from "../components/TimeZoneElement";

export default function MainScreen({ navigation }) {
  const [timeZone, setTimeZone] = useState("Europe/Paris");
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("timeZones")
      .then((value) => {
        if (value !== null) {
          setTimeZones(JSON.parse(value));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("timeZones", JSON.stringify(timeZones)).catch((error) =>
      console.log(error)
    );
  }, [timeZones]);



  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Clock timeZone={timeZone} fontSize={42} />
      </View>
      <Text style={styles.timeZoneText}>Time Zones</Text>
      <FlatList
        data={timeZones}
        renderItem={({ item }) => (
          <TimeZoneElement
            timeZone={item}
            currTimeZone={timeZone}
            setTimeZone={setTimeZone}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.timeZonesFlatList}
      />

      <NewTimeZone
        navigation={navigation}
        setTimeZones={setTimeZones}
        timeZones={timeZones}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  clockContainer: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "20%",
    marginBottom: 20,
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
