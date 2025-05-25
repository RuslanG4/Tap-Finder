import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Rating, Button, Overlay } from "react-native-elements";
import LeaveReviewPopUp from "./LeaveReviewPopUp";

type BaseDrinksProps ={
  name: string;
  price: number;
  starRating: number;
}

export type DrinksDropDownContentProps = {
  baseType: string;
  baseProps: BaseDrinksProps;
  isSearched?:boolean;
};

const DrinksDropDownContent: React.FC<DrinksDropDownContentProps> = ({
  baseType,
  baseProps,
  isSearched = false
}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => setVisible(!visible);



  return (
    <View style={isSearched ? styles.searchedContainer : styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{baseProps.name}</Text>
        <Text style={styles.priceText}>€{baseProps.price}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Rating readonly startingValue={baseProps.starRating} imageSize={22} />
        <Button
          title="Leave a review"
          type="clear"
          titleStyle={styles.reviewButtonText}
          onPress={toggleOverlay}
        />
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.Overlay}>
        <LeaveReviewPopUp closeOverlay={() => setVisible(false)} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  searchedContainer: {
    backgroundColor:"white",
    width: "100%",
    padding:20,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewButtonText: {
    fontSize: 14,
    color: "#007AFF",
  },
  Overlay: {
    width: '90%',
    height: '50%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default DrinksDropDownContent;
