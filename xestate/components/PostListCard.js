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
} from 'react-native';
import { Card, theme, Block } from 'galio-framework';
const { height, width } = Dimensions.get('screen');

const PostListCard = ({name, address,}) => {
    return (
        <Block>
            <Card
                card
                flex
                borderless
                // style={styles.card}
                title={name}
                caption="139 minutes ago"
                location="Los Angeles, CA"
                avatar="http://i.pravatar.cc/100?id=skater"
                imageBlockStyle={{ padding: 10 }}
                image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
            />
        </Block>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 200,
    }
});

export default PostListCard;