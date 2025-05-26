import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput  } from "react-native";
import { Avatar } from "react-native-elements";

const UserProfile: React.FC = () => {
  const [fullName, setFullName] = useState('Ruslan Gavrilov');

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        title="RG"
        containerStyle={styles.avatar}
      />
      
      <Text
        style={styles.nameInput}
      >{fullName}</Text>
      
      <Text style={styles.username}>@ruslan_g4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#999',
    marginBottom: 16,
  },
  nameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    width: 200,
    paddingVertical: 4,
  },
  username: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
});

export default UserProfile;
