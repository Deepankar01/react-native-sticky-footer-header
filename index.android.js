/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                        <Icon name="chevron-left" size={30} color="#FFF"  />
                        <Icon name="chevron-right" size={30} color="#FFF" />
                    </View>

                </View>

                <View style={{flex: 1, borderWidth: 1, paddingTop:8}}>
                    <Text style={{alignSelf:'center'}}>I take up loads of space!</Text>
                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        {this._renderScrollViewContent()}
                    </ScrollView>
                </View>
                <View style={styles.iconsFooter}>
                    <Text>Sticky Footer</Text>
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
        paddingTop:30,
    },
    navigationIcons:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        paddingLeft:12,
        paddingRight:12,
    },
    iconsFooter:{
        height:40,
        alignSelf: 'flex-end',
    }
});

AppRegistry.registerComponent('fixedFooter', () => fixedFooter);
