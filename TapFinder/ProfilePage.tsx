import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ReviewSummary from "./ReviewsSection";
import UserProfile from "./ProfilePageUserProfile";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.sideSpacer} />
        
        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity style={styles.settingsButton} onPress={() => { /* Handle settings press */ }}>
          <FontAwesome name="cog" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <UserProfile />
      <ReviewSummary/>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    display: 'flex',
    flexDirection: "column",
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
  },
  sideSpacer: {
    width: 24, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  settingsButton: {
    backgroundColor: 'transparent',
  },
});

export default ProfilePage;
