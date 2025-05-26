import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Rating, Button } from "react-native-elements";

interface LeaveReviewPopUpProps {
  closeOverlay: () => void;
}

const LeaveReviewPopUp: React.FC<LeaveReviewPopUpProps> = ({
  closeOverlay,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [reviewText, setReviewText] = useState("");

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <Text style={styles.loginWarning}>
          You must be logged in to leave a review
        </Text>
      ) : (
        <>
          <View style={styles.ratingContainer}>
            <Text style={styles.title}>Leave a rating!</Text>
            <Rating imageSize={50} style={styles.rating} />
            <TextInput
              style={styles.input}
              placeholder="Write your review here..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              value={reviewText}
              onChangeText={setReviewText}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={closeOverlay}
              buttonStyle={styles.submitButton}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  loginWarning: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
    marginTop: 40,
  },
  ratingContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginTop: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    borderWidth: 1,
    borderRadius: 8,
  },
  rating: {
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default LeaveReviewPopUp;
