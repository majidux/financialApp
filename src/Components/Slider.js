import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';

export default class Slider extends Component {
    render() {
        return (
            <View style={styles._slider}>
                <View style={styles._title}>
                    <View><Text style={styles.titleColor}>Cards</Text></View>
                    <View><Image source={require('../Assets/image/add.png')}/></View>
                </View>
                <FlatList
                    data={this.props.lastData}
                    keyExtractor={item=>item.email}
                    renderItem={({item})=>
                        <View>
                            <View></View>
                            
                            
                            
                        </View>
                        
                    }
                
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _slider: {
        flex: 4,
        backgroundColor:'pink'
    },
    _title:{
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    titleColor:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#fff'
    },
    
});