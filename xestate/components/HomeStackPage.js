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
import { createStackNavigator } from "react-navigation-stack";

import Home from './Home';

const HomeStackPage = createStackNavigator(
{
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    // Login: {
    //     screen: Login,
    //     navigationOptions: {
    //         title: "Login",
    //     },
    // },
    // Register: {
    //     screen: Register,
    //     navigationOptions: {
    //         title: "Register",
    //     },
    // },
},
{
    initialRouteName: 'Home',
},
);

export default HomeStackPage;