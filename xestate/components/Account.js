import React, { useState } from 'react';
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
import { Button } from 'galio-framework';

const login = (nav) => {
    nav.navigate('Login');
}

const register = (nav) => {
    nav.navigate('Register');
}

const Account = ({navigation}) => {
    return (
        <View style={styles.view} >
            <Text>
                Account
            </Text>
            <Button onPress={()=>{login(navigation);}}>Login</Button>
            <Button onPress={()=>{register(navigation);}}>Register</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
    }
});

export default Account;