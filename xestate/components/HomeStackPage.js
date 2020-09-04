import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import Home from './Home';
import RoomPage from './RoomPage';

const HomeStackPage = createStackNavigator(
{
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    RoomPage: {
        screen: RoomPage,
    }
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