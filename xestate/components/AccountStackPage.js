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

import Account from './Account';
import Login from './Login';
import Register from './Register';

const AccountStackPage = createStackNavigator(
{
    Account: {
        screen: Account,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login",
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: "Register",
        },
    },
},
{
    initialRouteName: 'Account',
},
);

export default AccountStackPage;