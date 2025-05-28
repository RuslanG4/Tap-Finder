import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapComponent from "./MapComponent";
import { SearchBar, Icon, Button } from "react-native-elements";

const TEMP_LOCATIONS = [
  { id: 1, latitude: 37.4225, longitude: -122.084, title: "Point A" },
  { id: 2, latitude: 37.422, longitude: -122.0825, title: "Point B" },
  { id: 3, latitude: 37.4215, longitude: -122.0845, title: "Point C" },
  { id: 4, latitude: 37.4222, longitude: -122.085, title: "Point D" },
];

const MapPage: React.FC = () => {
  const [search, SetSearch] = useState("");
  const [hasScanned, setHasScanned] = useState(false);

  const handleScan = () => {
    setHasScanned(true);
  };

  return (
    <View style={styles.container}>
      <MapComponent hasScanned={hasScanned} />
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={{
          backgroundColor: "#e0e0e0",
          borderRadius: 10,
        }}
        inputStyle={{
          color: "black",
        }}
        lightTheme
        round
        placeholder="Search for pubs..."
        value={search}
        onChangeText={(value) => SetSearch(value)}
      />
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanButtonText}>Perform Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchBar: {
    position: "absolute",
    paddingTop: 50,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingHorizontal: 10,
  },
  scanButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#ccc",
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 3, // shadow for Android
  },
  scanButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});

export default MapPage;
