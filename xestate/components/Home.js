import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { Button } from 'galio-framework';
import RoomListCard from './RoomListCard';

const { height, width } = Dimensions.get('screen');

const Home = ({navigation}) => {
    const [rooms, setRoom] = useState([]);

    useEffect(() => {
        
    }, [rooms]);

    pressed = function() {
        fetch("https://blog.nopublisher.dev/rooms")
        .then((response) => response.json())
        .then((json) => setRoom(json))
        .catch((error) => console.error(error));
    }

    return (
        <View style={styles.view} >
            <Text>
                Home
            </Text>
            <Button color="info" onPress={pressed} round />
            <ScrollView contentContainerStyle={{width}}>
                {rooms && rooms.map((room, id) => (
                    <RoomListCard
                        key={room.id} 
                        id={room.id}
                        name={room.name} 
                        address={room.address}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>  
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