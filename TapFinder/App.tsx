import "react-native-gesture-handler";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapPage from "./MapPage";

import PubPage from "./PubPage";
import ProfilePage from "./ProfilePage";

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*  */}
      <MapPage />
    </View>
  );
}

//temp pubpage for testing
function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* <PubPage />  */}
      <ProfilePage />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* Pub page stacked on top of tab navigator */}
        <Stack.Screen
          name="PubPage"
          component={PubPage}
          options={({ navigation }) => ({
            title: "Pub Info",
            headerBackTitle: "Back",
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  searchBar: {
    color: "white",
  },
  icon: {
    marginRight: 10,
  },
});
