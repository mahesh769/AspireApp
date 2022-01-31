import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as Utils from '../utility';
import BottomTabs from './bottomTabs';


const Stack = createStackNavigator();

function appNavigation() {
    return (
        <Stack.Navigator initialRouteName={Utils.Constants.KEY_BOTTOM_TABS} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Utils.Constants.KEY_BOTTOM_TABS} component={BottomTabs} />


        </Stack.Navigator >
    );
}

export default appNavigation;