import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';

export default class Body extends Component {
    
    render() {
        return (
            <View style={styles._body}>
                {!this.props.loading && <ActivityIndicator color={'#414352'} size={'large'}/>}
                {
                this.props.lastData && this.props.lastData.map((item, i) =>
                    <View style={styles.pocket} key={i}>
                        <View>
                            <View style={styles.balance}>
                                <View style={styles.left}>
                                    <Text style={[styles.greyColor, styles.fontSize13]}>Your Balance</Text>
                                    <Text style={[styles.whiteColor, {fontSize: 33}]}>{item.location.postcode}</Text>
                                </View>
                                <View style={styles.right}>
                                    <View style={[styles.outcome, {borderBottomWidth: 1, borderColor: '#545663'}]}>
                                        <Text style={[styles.greyColor, styles.fontSize13]}>Income</Text><Text
                                        style={styles.greenColor}>+ ${item.location.coordinates.latitude.substring(1.6)}</Text>
                                    </View>
                                    <View style={styles.outcome}>
                                        <Text style={[styles.greyColor, styles.fontSize13]}>Expense</Text><Text
                                        style={styles.redColor}>- ${item.location.coordinates.longitude.substring(1.6)}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles._options}>
                            <View style={styles.optionsWrapper}>
                                <View style={styles.leftItem}>
                                    <Image
                                        source={require('../Assets/image/credit-card.png')}
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                                <View style={styles.bankPrice}>
                                    <View style={styles.middleItem}>
                                        <Text style={styles.whiteColor}>Bank Transfer</Text>
                                        <Text style={[styles.whiteColor, styles.fontSize13]}>Salary</Text>
                                    </View>
                                    <View style={styles.rightItem}>
                                        <Text style={styles.greenColor}>+ ${item.location.coordinates.longitude.substring(3.8)}</Text>
                                        <Text style={[styles.greyColor, styles.fontSize11]}>31 Aug 2017</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.optionsWrapper}>
                                <View style={styles.leftItem}>
                                    <Image
                                        source={require('../Assets/image/shopping-cart.png')}
                                        style={{width: 25, height: 25}}
                                    />
                                </View>
                                <View style={styles.bankPrice}>
                                    <View style={styles.middleItem}>
                                        <Text style={styles.whiteColor}>Supermarket</Text>
                                        <Text style={[styles.whiteColor, styles.fontSize13]}>Salary</Text>
                                    </View>
                                    <View style={styles.rightItem}>
                                        <Text style={styles.redColor}>+ ${item.location.coordinates.longitude.substring(2.6)}</Text>
                                        <Text style={[styles.greyColor, styles.fontSize11]}>28 Aug 2017</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
                }
                
                
                
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _body: {
        flex: 3,
    },
    pocket: {
        // flex: 1,
        backgroundColor: '#333240',
        // minHeight: 120,
        justifyContent: 'space-between'
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop:15,
        paddingTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#545663'
    },
    fontSize13: {
        fontSize: 13
    },
    fontSize11: {
        fontSize: 11
    },
    outcome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    right: {
        backgroundColor: '#414350',
        flex: 1.5,
        justifyContent: 'space-evenly',
        borderTopEndRadius: 3,
        borderBottomEndRadius: 3
    },
    left: {
        backgroundColor: '#414350',
        flex: 1,
        paddingLeft: 15,
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        borderTopStartRadius: 3,
        borderBottomStartRadius: 3,
        borderRightWidth: 1,
        borderColor: '#545663'
    },
    fontBold: {
        fontWeight: 'bold'
    },
    whiteColor: {
        color: '#fff'
    },
    greyColor: {
        color: '#9da0ae',
    },
    greenColor: {
        color: '#98c570'
    },
    redColor: {
        color: '#f55c5f'
    },
    optionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#545663',
        paddingHorizontal: 15,
    },
    _options: {
        // paddingHorizontal: 15,
        
    },
    leftItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRightWidth: 1,
        // borderBottomWidth: 1,
        borderColor: '#545663',
        paddingVertical: 20
    },
    middleItem: {
        flex: 1,
        paddingVertical: 20
    },
    rightItem: {
        flex: 1,
        alignItems: 'flex-end',
        paddingVertical: 20
    },
    bankPrice: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    }
});