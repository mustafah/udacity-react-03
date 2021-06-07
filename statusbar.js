import Constants from 'expo-constants';
import React from 'react';
import { StatusBar, View } from 'react-native';


export default function AppStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
                barStyle='dark-content'
            />
        </View>
    );
}