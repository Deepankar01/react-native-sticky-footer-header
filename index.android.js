/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
                    translucent={false}
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />

                <Text style={{alignSelf:'flex-start'}}>Sticky Header</Text>

                <View style={{flex: 1, borderWidth: 1, paddingTop:8}}>
                    <Text style={{alignSelf:'center'}}>I take up loads of space!</Text>
                    <ScrollView
                        scrollEventThrottle={16}

                    >
                        {this._renderScrollViewContent()}
                    </ScrollView>
                </View>
                <Text style={{alignSelf: 'flex-end'}}>
                    Sticky Footer
                </Text>

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
});

AppRegistry.registerComponent('fixedFooter', () => fixedFooter);
