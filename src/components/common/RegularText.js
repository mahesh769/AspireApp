import React, { useState } from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import { fontNames } from '../../styles/typography';

const RegularText = ({
    title,
    fontFamily,
    numberOfLines,
    textStyle
}) => {

    return (
        <Text
            numberOfLines={numberOfLines != undefined ? numberOfLines : 100}
            style={[
                textStyle,
                {}
            ]}
        >
            {title}
        </Text>
    )
}

export default RegularText;