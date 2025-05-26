import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import AntDesign from "@expo/vector-icons/AntDesign";

type RootStackParamList = {
  Home: undefined; //has no params yet
  PubPage: { pubName: string }; //passing in name for future api 
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type ReviewSummaryProps = {
  pubName: string;
  reviewCount: number;
};

const ReviewComponent: React.FC<ReviewSummaryProps> = ({
  pubName,
  reviewCount,
}) => {
     const navigation = useNavigation<NavigationProp>();
     
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PubPage', { pubName })}>
      <View style={styles.container}>
        <Avatar
          size="medium"
          rounded={false}
          title={pubName.slice(0, 2).toUpperCase()}
          source={undefined}
          containerStyle={styles.avatar}
        />
        <View style={styles.content}>
          <Text style={styles.pubName}>{pubName}</Text>
          <Text style={styles.reviewCount}>reviews : {reviewCount}</Text>
        </View>
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
  },
  pubName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  reviewCount: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },
  icon: {
    marginLeft: "auto",
    alignSelf: "center",
    paddingRight: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    marginRight: 12,
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default ReviewComponent;
