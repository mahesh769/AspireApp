import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CommonImage from '../components/common/CommonImage';
import Home from '../components/screens/appScreens/home';
import { spacing } from '../styles/spacing';
import * as Utils from '../utility';
import colors from '../utility/Colors';
import { Images } from '../utility/imageRes';

const Tab = createBottomTabNavigator();
const activeTabColor = colors.tabActiveColor
const inActiveTabColor = colors.tabInactiveColor
const tabBarColor = colors.white

const tabData = [
    {
        label: "",
        name: Utils.Constants.SCREEN_HOME,
        icon: Images.IMG_TAB_HOME,
        component: Home
    },
    {
        label: "",
        name: Utils.Constants.SCREEN_TAB_CATEGORIES,
        icon: Images.IMG_TAB_CATEGORIES,
        component: Home
    },
    {
        label: "",
        name: Utils.Constants.SCREEN_TAB_WISHLIST,
        icon: Images.IMG_TAB_WISHLIST,
        component: Home
    },
    {
        label: "",
        name: Utils.Constants.SCREEN_TAB_CART,
        icon: Images.IMG_TAB_CART,
        component: Home
    },
    {
        label: "",
        name: Utils.Constants.SCREEN_TAB_PROFILE,
        icon: Images.IMG_TAB_PROFILE,
        component: Home
    },
]

function BottomTabs() {

    function MyTabBar({ state, descriptors, navigation }) {
        const focusedOptions = descriptors[state.routes[state.index].key].options;
        if (focusedOptions.tabBarVisible === false) {
            return null;
        }
        return (
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: colors.white,
                    height: spacing.HEIGHT_44,
                    alignItems: 'center',
                }}
            >
                {
                    state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const icon = options.tabBarIcon

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ name: route.name, merge: true });
                            }
                        };

                        return (

                            <TouchableOpacity
                                key={index + ""}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                                activeOpacity={1}
                            >
                                <CommonImage
                                    source={icon}
                                    style={[styles.iconStyle, { tintColor: isFocused ? activeTabColor : inActiveTabColor }]}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                        );
                    })}
            </View>
        );
    }

    const getTabBarVisibility = (route) => {
        if (route.name === Utils.Constants.SCREEN_POST_JOB) {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: activeTabColor,
                tabBarInactiveTintColor: inActiveTabColor,
                tabBarStyle: {
                    backgroundColor: tabBarColor,
                    height: spacing.HEIGHT_64,
                },
                tabBarLabelStyle: {},
                tabBarAllowFontScaling: true,
                tabBarItemStyle: {},
                headerShown: false
            }}
        >
            {
                tabData.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={index + ""}
                            name={item.name}
                            component={item.component}
                            options={({ route }) => ({
                                tabBarVisible: getTabBarVisibility(route),
                                tabBarIcon: item.icon,
                            })}
                        />
                    )
                })
            }
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    iconStyle: {
    },
    badgeStyle: {
        backgroundColor: colors.red600,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default BottomTabs;