import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

const FadeAnimation = ({ children }) => {

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))

    useEffect(() => {
        fadeIn()
    }, [])

    function fadeIn() {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };

    function fadeOut() {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };

    return (
        <Animated.View style={{ opacity: animatedValue, flex: 1, height: 100, backgroundColor: 'red' }}>
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        justifyContent: 'center',
    },
});

export default FadeAnimation;