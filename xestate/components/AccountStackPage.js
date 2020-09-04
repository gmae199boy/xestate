// import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import Account from './Account';
import Login from './Login';
import Register from './Register';
import RegistRoom from './RegistRoom';

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
    RegistRoom: {
        screen: RegistRoom,
        navigationOptions: {
            title: "RegisteRoom",
        },
    }
},
{
    initialRouteName: 'Account',
},
);

export default AccountStackPage;