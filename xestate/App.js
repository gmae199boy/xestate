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

// import Loading from "./component/Loading";
import Location from "react-native-geolocation-service";
import Googlemap from "./components/Googlemap";
import ConfirmButton from "./components/ConfirmButton";
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';

// Pages
import AccountStackPage from './components/AccountStackPage';
import Search from './components/Search';
import HomeStackPage from './components/HomeStackPage';


// const Tab = createMaterialBottomTabNavigator();

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackPage,
    },
    Search: {
      screen: Search,
    },
    Account: {
      screen: AccountStackPage,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Search') {
          iconName = 'search';
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Account') {
          iconName = 'information';
        }

        return (
          <IconComponent
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
export default createAppContainer(TabNavigator);

// const App: () => React$Node = () => {
//   // if (Platform.OS === 'android') {
//   //   await PermissionsAndroid.request(
//   //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   //   );
//   // }
//   return (
//     <>
//     {/* <SafeAreaView>
//       <ScrollView> */}
//         <Router>
//           <Stack key="root">
//             <Scene key="login" component={Login} title="Login" />
//             <Scene key="register" component={Register} title="Register" />
//             <Scene key="home" component={Home} initial title="Home"/>
//           </Stack>
//         </Router>
//       {/* </ScrollView>
//     </SafeAreaView> */}
//       {/* <StatusBar barStyle="dark-content" /> */}
//         {/* <ScrollView style={StyleSheet.absoluteFillObject}> */}
        
//           {/* <View style={{flex:1}}>
//             <Text style={{flex:1}}>asd</Text>
//             <Googlemap />
//             <ConfirmButton />
//           </View> */}
//     </>
//   );
// };

// export default App;



// export default class App extends React.Component {
//   state = {
//     isLoading: true,
//     latitude: 0,
//     longitude: 0,
//   }
//   getLocation = async() => {
//     try {
//       if (Platform.OS === 'android') {
//         await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         );
//       }
//       Location.getCurrentPosition( position => {
//         const {coords: {latitude, longitude}} = position;
//         this.setState({
//           isLoading: false,
//           latitude: latitude,
//           longitude: longitude,
//         })
//         console.log(latitude, longitude);
//       },
//       error => {
//         console.log(error.code, error.message);
//       },
//       Platform.OS === 'android' ? 
//       {} : 
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000  });
//     } catch (err) {
//       Alert.alert("??");
//     }

//   }
//   componentDidMount() {
//     this.getLocation();
//   }
//   render() {
//     // const { isLoading } = this.state;
//     return (

//     );
//   }
// }

