import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

export default class Slider extends Component {
    render() {
        return (
            <View style={styles._slider}>
                <View style={styles._title}>
                    <View><Text style={styles.titleColor}>Cards</Text></View>
                    <View><Image source={require('../Assets/image/add.png')}/></View>
                </View>
                <View style={{flex: 6}}>
                    <FlatList
                        data={this.props.lastData}
                        keyExtractor={item => item.email}
                        horizontal={true}
                        
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) =>
                            <View style={styles.card}>
                                <View style={[styles.flex1]}>
                                    <Image
                                        source={require('../Assets/image/logovisa.png')}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={[styles.flex1]}>
                                    <Text style={[styles.whiteColor, styles.cardNumber]}>**** **** **** 7415</Text>
                                </View>
                                <View style={[styles.flex1, styles.cardFooter]}>
                                    <View style={styles.cardHolder}>
                                        <View>
                                            <Text style={[styles.greyColor]}>Cardholder Name</Text>
                                        </View>
                                        <View style={{alignItems: 'flex-start'}}>
                                            <Text style={[styles.whiteColor, styles.boldFont]}>{`${item.name.first.charAt(0).toUpperCase()}${item.name.first.slice(1).toLowerCase()} ${item.name.last.charAt(0).toUpperCase()}${item.name.last.slice(1).toLowerCase()}`}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.expireDate}>
                                        <Text style={[styles.greyColor]}>Expiry</Text>
                                        <Text
                                            style={[styles.whiteColor, styles.boldFont]}>{item.registered.date.substring(0, 10)}</Text>
                                    </View>
                                </View>
                            </View>
                            
                        }
                    
                    />
                </View>
                
                <View style={styles.threeDots}>
                    <View>
                        <Image
                            source={require('../Assets/image/circle.png')}
                            style={{width:8,height:8}}
                        />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Image
                            source={require('../Assets/image/white-circle.png')}
                            style={{width:8,height:8}}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/image/circle.png')}
                            style={{width:8,height:8}}
                        />
                    </View>
                </View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _slider: {
        // flex: 4,
        backgroundColor: '#3c3e4b',
        minHeight: 275
    },
    _title: {
        backgroundColor: '#424451',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    titleColor: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    flex1: {
        flex: 1
    },
    card: {
        justifyContent: 'space-between',
        backgroundColor: '#6c6f7e',
        padding: 20,
        marginHorizontal: 20,
        flex: 1,
        borderRadius: 5
    },
    whiteColor: {
        color: '#fff'
    },
    cardNumber: {
        fontSize: 20,
        letterSpacing: 6
    },
    cardHolder: {
        flex: 2,
        justifyContent: 'space-evenly'
    },
    expireDate: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    cardFooter: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1
    },
    greyColor: {
        color: '#9da0ae',
    },
    boldFont: {
        fontWeight: 'bold'
    }
    ,
    image: {
        width: 70,
        height: 20,
    },
    threeDots:{
        backgroundColor:'#353542',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    }
    
});