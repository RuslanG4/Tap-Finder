import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import ReviewComponent from "./ReviewComponent";

const ReviewSummary: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Your Reviews</Text>
      <View>
        <ReviewComponent pubName="Harry Burkes" reviewCount={4} />
        <ReviewComponent pubName="Tullys" reviewCount={18}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 8,
  },
});

export default ReviewSummary;
