import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Utils from '../utility';

import Settings from '../components/screens/commonScreens/settings'
import ChangePassword from '../components/screens/commonScreens/changePassword'
import ChangeLanguage from '../components/screens/commonScreens/changeLanguage'

const Stack = createStackNavigator();

function commonNavigation() {
    return (
        <Stack.Navigator initialRouteName={Utils.Constants.SCREEN_SETTINGS} headerMode='none'>
            <Stack.Screen name={Utils.Constants.SCREEN_SETTINGS} component={Settings} />
            <Stack.Screen name={Utils.Constants.SCREEN_CHANGE_PASSWORD} component={ChangePassword} />
            <Stack.Screen name={Utils.Constants.SCREEN_CHANGE_LANGUAGE} component={ChangeLanguage} />
        </Stack.Navigator>
    );
}

export default commonNavigation;