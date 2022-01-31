import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../../utility/Colors';

const CommonKeyboardAvoidingView = ({ children }) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={true}
        >
            <ScrollView style={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

});

export default CommonKeyboardAvoidingView;