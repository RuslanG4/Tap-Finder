import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PubNameProps = {
  name: string;
};

const PubName: React.FC<PubNameProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // center horizontally
    marginLeft: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PubName;
