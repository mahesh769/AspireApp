import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Utils from "./index"
import { KEY_USER_TOKEN } from "./constants";

export const USER_DATA = Utils.Constants.KEY_USER_DATA;
export const TIME_OUT_TIME = 'TIME_OUT_TIME';

export const setUserData = (data) => {
    storeItem(USER_DATA, data);
}

export const getUserData = () => {
    return retrieveItem(USER_DATA).then((data) => {
        //this callback is executed when your Promise is resolved
    }).catch((error) => {
        //this callback is executed when your Promise is rejected
    })
}

export async function retrieveItem(key) {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        if (key === KEY_USER_TOKEN) {
            global[KEY_USER_TOKEN] = item
        }
        return item;
    } catch (error) {
    }
    return
}
export async function retrieveValue(key) {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        return retrievedItem;
    } catch (error) {
        console.log(error.message);
    }
    return
}

export async function storeItem(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        if (key === KEY_USER_TOKEN) {
            global[KEY_USER_TOKEN] = item
        }
        return jsonOfItem;
    } catch (error) {
    }
}

export async function clearAsyncKeyData(key) {
    await AsyncStorage.removeItem(key)
}

export async function clearData() {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        // Error retrieving data
    }
}