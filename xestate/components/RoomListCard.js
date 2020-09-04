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
    Dimensions,
    TouchableOpacity, // card를 터치 가능하게 해주는놈!!
} from 'react-native';
import { Card, theme, Block, Button } from 'galio-framework';
import RoomPage from './RoomPage';

const { height, width } = Dimensions.get('screen');

const roomPage = (nav, object) => {
    nav.navigate({
       routeName: 'RoomPage',
       params: {
           id: object,
       } ,
    });
}

const RoomListCard = ({name, address, id, navigation}) => {

    pressed = function() {
        // fetch(`https://blog.nopublisher.dev/room/${id}`)
        //     .then((response) => response.json())
        //     .then((json) => console.log(json))
        //     .catch((error) => console.error(error));
    }

    return (
        <Block>
            <TouchableOpacity onPress={()=>{roomPage(navigation, id);}}>
                <Card
                    card
                    flex
                    borderless
                    // style={styles.card}
                    button
                    title={name}
                    caption="139 minutes ago"
                    location={address}
                    avatar="http://i.pravatar.cc/100?id=skater"
                    imageBlockStyle={{ padding: 10 }}
                    image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                />
            </TouchableOpacity>
        </Block>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
    }
});

export default RoomListCard;