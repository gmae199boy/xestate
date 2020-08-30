import React, { useState, useEffect } from 'react';
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
import { Button } from 'galio-framework';
import Login from './Login';
import Register from './Register';



const Home = ({navigation}) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        
    }, [post]);

    return (
        <View style={styles.view} >
            <Text>
                Home
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
    }
});

export default Home;