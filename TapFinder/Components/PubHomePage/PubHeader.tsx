import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import PubName from "./PubName";

type PubHeaderProps = {
  pubname: string;
};

const PubHeader: React.FC<PubHeaderProps> = ({ pubname }) => {
  return (
    <View style={styles.pubHeader}>
      <PubName name={pubname} />
      <AntDesign name="hearto" size={24} color="black" style={styles.heart} />
    </View>
  );
};
const styles = StyleSheet.create({
  backArrow: {
    margin: 15,
  },
  heart: {
    marginLeft: "auto",
    marginRight: 15,
    fontSize: 22,
  },
  pubHeader: {
    display: "flex",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default PubHeader;
