import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ForgotPasswordScreen from '../components/screens/authScreens/forgotPassword';
import Login from '../components/screens/authScreens/login';
import OtpVerificationScreen from '../components/screens/authScreens/otpVerification';
import Registration from '../components/screens/authScreens/registration';
import ResetPasswordScreen from '../components/screens/authScreens/resetPassword';
import * as Utils from '../utility';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={Utils.Constants.SCREEN_LOGIN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Utils.Constants.SCREEN_LOGIN} component={Login} />
            <Stack.Screen name={Utils.Constants.SCREEN_REGISTER} component={Registration} />
            <Stack.Screen name={Utils.Constants.SCREEN_OTP_VERIFICATION} component={OtpVerificationScreen} />
            <Stack.Screen name={Utils.Constants.SCREEN_FORGOT_PASSWORD} component={ForgotPasswordScreen} />
            <Stack.Screen name={Utils.Constants.SCREEN_RESET_PASSWORD} component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
