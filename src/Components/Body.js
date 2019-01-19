import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';

export default class Body extends Component {
    
    render() {
        return (
            <View style={styles._body}>
                {/*{!this.props.loading && <ActivityIndicator/>}*/}
                {/*{*/}
                {/*this.props.lastData && this.props.lastData.map((item, i) =>*/}
                {/*<View style={styles.balance}>*/}
                {/*<Text key={i}>{item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1).toLowerCase()}</Text>*/}
                {/*</View>*/}
                {/*)*/}
                {/*}*/}
                
                
                <View style={styles.pocket}>
                    <View>
                        <View style={styles.balance}>
                            <View style={styles.left}>
                                <Text>Your Balance</Text>
                                <Text>$5200</Text>
                            </View>
                            <View style={styles.right}>
                                <View style={styles.outcome}>
                                    <Text>Income</Text><Text>+ $6720</Text>
                                </View>
                                <View style={styles.outcome}>
                                    <Text>Expense</Text><Text>- $2520</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>Bank Transfer</Text>
                    </View>
                </View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _body: {
        flex: 3,
        backgroundColor: 'lightgreen'
    },
    pocket: {
        // flex: 1,
        backgroundColor: 'pink',
        // minHeight: 120,
        justifyContent: 'space-between'
    },
    balance:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    outcome:{
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    right:{
        backgroundColor:'red',
        flex:1,
        justifyContent:'space-evenly'
    },
    left:{
        backgroundColor:'blue',
        flex:1,
        paddingLeft: 15,
        paddingVertical:20,
        justifyContent:'space-evenly',
    },
    fontBold:{
        fontWeight: 'bold'
    }
});