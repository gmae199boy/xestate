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
import { Button, Input, Block } from 'galio-framework';

const Register = ({}) => {
    return (
        <View>
            <Text>
                Register
            </Text>
            <Input placeholder="ID" placeholderTextColor={"#3B5998"} />
            <Input placeholder="password" password viewPass placeholderTextColor={"#3B5998"} />
        </View>
    );
}

export default Register;