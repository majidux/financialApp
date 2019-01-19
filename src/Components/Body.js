import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,ActivityIndicator,FlatList} from 'react-native';

export default class Body extends Component {
    
    render() {
        return (
            <View style={styles._body}>
                {!this.props.loading && <ActivityIndicator/>}
                {
                  this.props.lastData &&  this.props.lastData.map( (item,i)=> <Text key={i}>{item.name.first.charAt(0).toUpperCase()+item.name.first.slice(1).toLowerCase()}</Text>)
                }
                
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _body: {
        flex: 3,
        backgroundColor:'lightgreen'
    }
});