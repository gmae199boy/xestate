import React, { useState } from 'react';
import { 
    Platform, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback, 
    View, 
    useColorScheme,
    Alert,
} from 'react-native';
import { Button } from 'galio-framework';
import axios from 'axios';



const ConfirmButton = () => {
    const [data, setData] = useState(10);
    const pressed = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(({data}) => {
            setData(data.id);
        });
        
    };
    return (
        <Button color="info" onPress={pressed} round >{data && data.toString()}</Button>
        // <TouchableHighlight onPress={pressed} style={{flex:1}}>
        //     <Text>{data}</Text>
        // </TouchableHighlight>
    );
};

export default ConfirmButton;