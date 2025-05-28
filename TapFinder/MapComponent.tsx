import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

type MapComponentProps = {
  hasScanned: boolean;
};

const TEMP_LOCATIONS = [
  { id: 1, latitude: 52.836528, longitude: -6.931528, title: "Tullys" },
  { id: 2, latitude: 52.837083, longitude: -6.931834, title: "Harry Burkes" },
];

const mapStyle = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
];

const MapComponent: React.FC<MapComponentProps> = ({ hasScanned }) => {
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [tempCarlow, setTempCarlow] = useState<{
    latitude: number;
    longitude: number;
  } | null>({
    latitude: 52.836,
    longitude: -6.9246,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") return;

      const location = await Location.getCurrentPositionAsync({});

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    fetchUserLocation();
  }, []);

  if (!userLocation) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: tempCarlow.latitude,
          longitude: tempCarlow.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={tempCarlow} title="You are here" />

        {hasScanned &&
          TEMP_LOCATIONS.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
            />
          ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapComponent;
