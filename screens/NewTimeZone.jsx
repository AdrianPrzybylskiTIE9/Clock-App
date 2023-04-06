import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import TimeZonesList from "../components/TimeZonesList";

export default function NewTimeZone({route, navigation}) {
  const { timeZones, setTimeZones } = route.params;
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);

  const data = Object.entries(TimeZonesList);

  const renderCountry = ({ item }) => (
    <Pressable
      style={[
        styles.flatListButton,
        selectedTimeZone === item[0] && { borderColor: "#1468be" },
      ]}
      onPress={() => setSelectedTimeZone(item[0])}
    >
      <Text style={styles.flatListButtonText}>{`${item[0]} (${item[1]})`}</Text>
    </Pressable>
  );

  const addNewCountry = () => {
    console.log(timeZones);
    console.log(selectedTimeZone);
    if (selectedTimeZone && !(timeZones.includes(selectedTimeZone))) {
      setTimeZones((prev) => [...prev, selectedTimeZone]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>New Time Zone</Text>

        <View style={styles.flatList}>
          <FlatList
            data={data}
            renderItem={renderCountry}
            keyExtractor={(item) => item[0]}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={addNewCountry}>
          <Text style={styles.buttonText}>Add Time Zone</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: "column",
    width: "100%",
    height: "85%",
    marginBottom: 20,
  },
  title: {
    opacity: 0.8,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 5,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  flatList: {
    height: "100%",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,

    // backgroundColor: "white",
  },
  flatListButton: {
    alignItems: "center",

    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 5,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#878e95",
  },
  flatListButtonText: {
    color: "#878e95",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: "100%",
    height: "10%",
  },
  button: {
    alignItems: "center",

    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,

    backgroundColor: "#1468be",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
