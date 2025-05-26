import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import ReviewComponent from "./ReviewComponent";

type ReviewComponentProps = {
  hasReviews: boolean;
};

const ReviewSummary: React.FC<ReviewComponentProps> = ({ hasReviews }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Your Reviews</Text>
      {hasReviews ? (
        <View>
          <ReviewComponent pubName="Harry Burkes" reviewCount={4} />
          <ReviewComponent pubName="Tullys" reviewCount={18} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "90%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 8,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default ReviewSummary;
