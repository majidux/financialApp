import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,ActivityIndicator} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles._body}>
                {
                  this.props.lastData &&  this.props.lastData.map( (item,i)=> <Text key={i}>{item.name.first.charAt(0).toUpperCase()+item.name.first.slice(1).toLowerCase()}</Text>)
                }
                
                {!this.props.loading && <ActivityIndicator/>}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _body: {
        flex: 4,
        backgroundColor:'lightgreen'
    }
});