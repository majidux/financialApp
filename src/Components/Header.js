import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles._header}>
                <View style={styles.inHeader}>
                    <View style={styles.imagesView}>
                        <Image
                            source={require('../Assets/image/three-lines.png')}
                            
                        />
                    </View>
                    <View style={[styles.imagesView,{alignItems: 'flex-end'}]}>
                        <Image
                            source={require('../Assets/image/12.jpg')}
                            style={styles._image}
                        />
                        {/*<Text>{this.props.profilePhoto}</Text>*/}
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _header: {
        // flex: 1,
        backgroundColor:'#424451',
        minHeight: 80
    },
    inHeader:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    _image:{
        borderRadius:30,
        width:50,
        height:50
    },
    imagesView:{
        flex:1,
    }
});