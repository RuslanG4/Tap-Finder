import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Rating, Button } from 'react-native-elements';

export type DrinksDropDownContentProps ={
    name:string;
    price:number;
    starRating:number;
}

const DrinksDropDownContent: React.FC<DrinksDropDownContentProps> = ({ name, price, starRating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText}>€{price}</Text>
      </View>
      <View style={styles.bottomContainer}>
      <Rating
        readonly
        startingValue={starRating}
        imageSize={22}
      />
    <Button
        title="Leave a review"
          type="clear"
          titleStyle={styles.reviewButtonText}
/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  reviewButtonText: {
    fontSize: 14,
    color: '#007AFF',
  },
});


export default DrinksDropDownContent;