/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';

export default class fixedFooter extends Component {


    _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
            <View>
                {data.map((_, i) =>
                    <View key={i} style={styles.row}>
                        <Text>Simple Text {i + 1}</Text>
                    </View>
                )}
            </View>
        );
    }

    render() {


        return (
            <View style={{flex: 1, alignItems: 'stretch'}}>
                <StatusBar
                    translucent={true}
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.254)"
                />

                <View style={styles.navigationHeader}>
                    <View style={styles.navigationIcons}>
                        <Icon name="arrow-back" size={30} color="#FFF"  />
                        <Text style={styles.headerText}>Awsome Header</Text>
                        <Icon name="arrow-forward" size={30} color="#FFF" />
                    </View>

                </View>

                <View style={{flex: 1, borderWidth: 0, paddingTop:8}}>
                    <Text style={{alignSelf:'center'}}>I take up loads of space!</Text>
                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        {this._renderScrollViewContent()}
                    </ScrollView>
                </View>
                <View style={styles.Footer}>
                    <View style={styles.footerIcons}>
                        <Icon name="home" size={30} color="#FFF"  />
                        <Icon name="date-range" size={30} color="#FFF"  />
                        <Icon name="school" size={30} color="#FFF"  />
                        <Icon name="map" size={30} color="#FFF"  />
                        <Icon name="person" size={30} color="#FFF"  />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',

    },
    navigationHeader:{
        alignSelf:'flex-start',
        backgroundColor:'#03A9F4',
        flex:1/16,
        flexDirection:'row',
        paddingTop:26,
    },
    footerIconText:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
    },
    footerIcons:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        paddingTop:4,
    },
    navigationIcons:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        paddingLeft:12,
        paddingRight:12,
    },
    Footer:{
        flex:1/12,
        alignSelf: 'flex-end',
        backgroundColor:'#03A9F4',
        flexDirection:'row',

    },
    headerText:{
        fontSize:18 ,
        paddingTop:4,
        color:'#FFF',
        fontWeight:'bold',
    },
});

AppRegistry.registerComponent('fixedFooter', () => fixedFooter);
