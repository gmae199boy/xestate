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
import { Button, Input } from 'galio-framework';

const RegistRoom = ({}) => {
    const [name, setName] = useState("");
    const [roomType, setRoomType] = useState(0);
    const [address, setAddress] = useState("");
    const [state, setState] = useState(0);

    useEffect(() => {
        
    }, [name, roomType, address, state]);

    pressed = function() {
        fetch("https://blog.nopublisher.dev/room/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                roomType: roomType,
                address: address,
                state: state,
            }),
        });
    }

    return (
        <View>
            <Text>
                Regist Room
            </Text>
            <Input placeholder="name" onChangeText={text => {setName(text)}} placeholderTextColor={"#3B5998"} />
            <Input placeholder="room type" onChangeText={text => {setRoomType(text)}} password viewPass placeholderTextColor={"#3B5998"} />
            <Input placeholder="address" onChangeText={text => {setAddress(text)}} placeholderTextColor={"#3B5998"}></Input>
            <Input placeholder="state" onChangeText={text => {setState(text)}} placeholderTextColor={"#3B5998"}></Input>
            <Button onPress={pressed}>
                send
            </Button>
        </View>
    );
}

export default RegistRoom;