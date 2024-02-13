import {View, Text} from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

const index = () => {
    return (
        <TamaguiProvider config={config}>
            <View>
            <Redirect href="/home" />
            </View>
        </TamaguiProvider>
    )

}

export default index;
