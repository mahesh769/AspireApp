import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/Colors';

const GradiantProgressBar = ({ progress, style }) => {
    return (
        <View style={{
            borderWidth: spacing.HEIGHT_10 / 2,
            borderRadius: spacing.RADIUS_90,
            borderColor: colors.theme_trans,
        }} >
            <LinearGradient
                colors={[colors.theme_se, colors.theme_se]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={[{
                    height: spacing.HEIGHT_10,
                    width: `${progress * 100}%`,
                    borderTopLeftRadius: spacing.RADIUS_90,
                    borderBottomLeftRadius: spacing.RADIUS_90,
                    borderTopRightRadius: progress == 1 ? spacing.RADIUS_90 : 0,
                    borderBottomRightRadius: progress == 1 ? spacing.RADIUS_90 : 0,
                    marginTop: -spacing.HEIGHT_5, marginHorizontal: -spacing.HEIGHT_5
                }, style]}
            >
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default GradiantProgressBar;