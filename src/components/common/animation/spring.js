import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

const SpringAnimation = ({ childComponent, style }) => {

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))
    let delayValue = 500

    useEffect(() => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
            tension: 20
        }).start()
    }, [])

    delayValue = delayValue + 500
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [delayValue, 1]
    });

    return (
        <Animated.View style={[style, { transform: [{ translateY }], flex: 1 }]}>
            {childComponent}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        justifyContent: 'center',
    },
});

export default SpringAnimation;