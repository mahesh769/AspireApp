import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Utils from '../utility';
import { navigationRef } from '../NavigationService';

import AppNavigator from './appNavigator'

const Stack = createStackNavigator();

function MyStack({ }) {
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator initialRouteName={Utils.Constants.KEY_APP_NAVIGATOR} screenOptions={{ headerShown: false }} >
                <Stack.Screen name={Utils.Constants.KEY_APP_NAVIGATOR} component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;