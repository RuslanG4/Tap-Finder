import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PubPage from './PubPage';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <PubPage />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // hides the top header
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  searchBar:{
    color:"white"
  },
    icon: {
    marginRight: 10,
  },
});
