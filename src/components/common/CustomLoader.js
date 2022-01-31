import React from 'react';
import {
    ActivityIndicator, Dimensions, Modal, StyleSheet, View
} from 'react-native';
import { Constants } from '../../utility';
import colors from '../../utility/Colors';


const screenWidth = Math.round(Dimensions.get('window').width);

const CustomAlertModal = (props) => {
    const {
        loading
    } = props

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={loading}
            onRequestClose={() => {
                //onClose()
            }}>
            <View style={styles.modalMainContainer} >
                {/* <FastImage
                    style={{ height: 60, width: 60 }}
                    source={IMAGE_CUSTOM_LOADER}
                /> */}
                <ActivityIndicator color={colors.buttonColor} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalMainContainer: {
        backgroundColor: colors.transparent,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.transparentBlack
    },
    visibleViewStyle: {
        backgroundColor: colors.transparent,
        //flex: 1,
        width: screenWidth - 50,
        height: screenWidth / 2,
        alignItems: "center",
        borderRadius: 5,
    },
    messageStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        backgroundColor: colors.ACCENT_COLOR,
        // width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default CustomAlertModal;