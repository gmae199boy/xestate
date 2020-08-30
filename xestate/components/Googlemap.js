import React from "react";
import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Googlemap = () => {
    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 100,
                longitude: 100,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
        }}/>
    );
};

const styles = StyleSheet.create({
    map: {
      height: 500,
      marginVertical: 50,
    }
});

export default Googlemap;
