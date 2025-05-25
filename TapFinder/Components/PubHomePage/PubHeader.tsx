import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import PubName from "./PubName";

const PubHeader: React.FC = ({
}) => {
  return (
    <View style={styles.pubHeader}>
      <AntDesign name="arrowleft" size={24} color="black" style={styles.backArrow} />
      <PubName name='Example Pub'/>
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
    marginRight:10,
    fontSize:22
  },
  pubHeader:{
    display:"flex",
    marginTop:35,
    borderBottomColor : '#ccc',
    borderBottomWidth: 1,
    alignItems:"center",
    flexDirection:"row"
  }
});

export default PubHeader;
