import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/Colors';
import { APP_HORIZONTAL_SPACING } from '../../../utility/constants';
import CommonImage from '../CommonImage';

function Header({ leftImage, centerImage, rightImage, rightClick }) {

    return (
        <View style={styles.container}>
            <View style={styles.leftIcon} >
                {
                    leftImage &&
                    <CommonImage
                        style={styles.leftIcon}
                    />
                }
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                {
                    centerImage &&
                    <CommonImage
                        style={styles.centerIcon}
                        source={centerImage}
                    />
                }
            </View>
            <View style={styles.rightIcon} >
                {
                    rightImage &&
                    <TouchableOpacity onPress={rightClick}>
                        <CommonImage
                            source={rightImage}
                            style={{ width: 23, height: 23 }}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // height: (Platform.OS === 'ios' ? spacing.HEIGHT_48 : spacing.HEIGHT_56),
        paddingVertical: spacing.PADDING_16,
        paddingHorizontal: APP_HORIZONTAL_SPACING,
        backgroundColor: colors.theme,
    },
    centerIcon: {
    },
    leftIcon: {
        position: 'absolute',
        left: spacing.PADDING_12
    },
    rightIcon: {
        position: 'absolute',
        right: spacing.PADDING_12
    }
})

export default Header;