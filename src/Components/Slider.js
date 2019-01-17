import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Slider extends Component {
    render() {
        return (
            <View style={styles._slider}>
                <Text>Slider</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _slider: {
        flex: 4,
        backgroundColor:'pink'
    }
});