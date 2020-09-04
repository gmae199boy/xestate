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
import { Button, Input, Block } from 'galio-framework';

const RoomPage = ({route, navigation}) => {
    const [room, setRoom] = useState({});
    const {id} = route.params;

    useEffect(() => {
        fetch(`https://blog.nopublisher.dev/room/${id}`)
        .then((response) => response.json())
        .then((json) => setRoom(json))
        .catch((error) => console.error(error));
    }, [room])

    return (
        <View>
            <Text>
                Room Page
            </Text>
            <Text> {room.name && room.name} </Text>
            <Text> {room.roomType && room.roomType} </Text>
            <Text> {room.deposit && room.deposit} </Text>
            <Text> {room.address && room.address} </Text>
            <Text> {room.progress && room.progress} </Text>
        </View>
    );
}

export default RoomPage;