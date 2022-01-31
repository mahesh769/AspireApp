import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';


const { height, width } = Dimensions.get('window')

const CommonImage = ({
    source,
    style,
    resizeMode,
}) => {

    return (
        <View  >
            {source.uri == undefined ?
                <Image
                    source={source}
                    resizeMode={resizeMode ? resizeMode : 'contain'}
                    style={[style, {}]}
                />
                :
                <FastImage
                    source={source}
                    resizeMode={resizeMode ? resizeMode : 'cover'}
                    style={[style, { resizeMode: 'cover' }]}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({

});

export default CommonImage;