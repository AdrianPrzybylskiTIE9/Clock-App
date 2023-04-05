import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import CountryList from "../components/CountryList";

export default function NewTimeZone(props) {
  const [text, setText] = useState("");

  const filterCountries = (newText) => {
    if (newText.trim() != "") {
      return Object.keys(CountryList).filter((country) =>
        country.toLowerCase().includes(newText.toLowerCase())
      );
    }
  };

  const [filteredCountries, setFilteredCountries] = useState(
    filterCountries("")
  );

  const handleChangeText = (newText) => {
    setText(newText);
    setFilteredCountries(filterCountries(text));
    console.log(`New text: ${newText}`);
  };

  const setInput = (item) => {
    setText(item);
    setFilteredCountries("");
  };

  const renderCountry = ({ item }) => (
    <Pressable
      style={styles.flatListButton}
      onPress={() => {
        setInput(item);
      }}
    >
      <Text style={{ color: "black" }}>{`${item} (${CountryList[item]})`}</Text>
    </Pressable>
  );

  const addNewCountry = () => {
    if (text in CountryList) {
      props.setCountries([...props.countries, text]);
    } else {
      console.log("not exists");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>New Time Zone</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={text}
        ></TextInput>

        <FlatList
          data={filteredCountries}
          renderItem={renderCountry}
          keyExtractor={(item) => item}
          style={styles.flatList}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={addNewCountry}>
          <Text style={styles.buttonText}>Add Tme Zone</Text>
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
    height: "80%",
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
    height: "10%",
    maxHeight: "30%",
    padding: 10,
    borderRadius: 5,

    backgroundColor: "white",
  },
  flatListButton: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 5,

    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 5,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "100%",
    height: "10%",
  },
  button: {
    alignItems: "center",

    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,

    backgroundColor: "#1468be",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
