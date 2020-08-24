/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Loading from "./component/Loading";
import Location from "react-native-geolocation-service";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <Loading/>
//     </>
//   );
// };

export default class App extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
      Location.getCurrentPosition(position => {
        const {coords: {latitude, longitude}} = position;
        this.setState({
          isLoading: false,
        })
      },
      error => {
        console.log(error.code, error.message);
      },
      Platform.OS === 'android' ? 
      {} : 
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000  });
    } catch (err) {
      Alert.alert("??");
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            style={{flex: 1}}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <MapView
              style={{flex: 1}}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}