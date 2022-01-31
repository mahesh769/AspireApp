import NavigationService from "../NavigationService"

import { Images } from "./imageRes"
import moment from "moment"

import { Linking, PermissionsAndroid, Platform, StatusBar } from 'react-native'
import { getErrorMessage } from "./Utils"

import { BASE_URL } from "../redux/services/apiTypes";
import { KEY_APP_NAVIGATOR, KEY_AUTH, KEY_IS_GUEST_USER, KEY_USER_DATA, KEY_USER_TOKEN } from "./constants";
import { clearAsyncKeyData, storeItem } from "./CustomAsyncStorage";
import reduxStore from '../redux/store';
import DocumentPicker from 'react-native-document-picker'
import flashMessage from "../components/common/CustomFlashAlert";
import Strings from "../translation/language";

//navigation functions
export const navigate = (routeName, params = {}) => {
    NavigationService.navigate(routeName, params)
}

export const replace = (routeName, params = {}) => {
    NavigationService.replace(routeName, params)
}

export const goBack = () => {
    NavigationService.back()
}

export const openDrawer = () => {
    NavigationService.openDrawer()
}

export const closeDrawer = () => {
    NavigationService.closeDrawer()
}

export const clearStack = (routeName, params) => {
    NavigationService.clearStack(routeName, params)
}

export const push = (routeName, params) => {
    NavigationService.push(routeName, params)
}

//media picker functions
export function OpenGallary(callback, options) {

}

export function OpenCamera(callback, options) {

}

export async function PickSingleDocument(callback, options, maxSize) {
    try {
        const res = await DocumentPicker.pickSingle(options)
        if (res.size > maxSize) {
            flashMessage(Strings.error_file_size + maxSize + ' mb', 'danger')
            return
        }
        let file = {
            uri: res.uri,
            type: res.type,
            name: res.name,
        }
        callback(file)
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err
        }
    }
}

export async function PickMutipleDocument(callback, options, maxSize) {
    try {
        const res = await DocumentPicker.pickMultiple(options)
        let files = []
        for (let i = 0; i < res.length; i++) {
            if (res[i].size > maxSize) {
                flashMessage(Strings.error_file_size + maxSize + ' mb', 'danger')
                return
            }
            let file = {
                uri: res[i].uri,
                type: res[i].type,
                name: res[i].name,
            }
            files.push(file)
        }
        callback(files)
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err
        }
    }
}

export function toShowHeaderBorderOnScroll(event) {
    if (event.nativeEvent.contentOffset.y > 0) {
        return true
    }
    else {
        return false
    }
}

//date time functions
export function convertDateTime(value, format) {
    let convertedValue = moment(value).format(format)
    return convertedValue
}

//location functions
export const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: "Autolizer wants to detect your location",
                message:
                    "Enable location",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true
        } else {
            return false
        }
    } catch (err) {

    }
};

export async function getGeoLocation(callback) {

}

export function openMap(lat, long) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${long}`;
    const label = 'Custom Label';
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
}

//fcm functions
export async function requestFcmPermission() {

}

export async function getFcmToken() {

}

export function loginAsGuest() {
    clearStack(KEY_APP_NAVIGATOR)
    storeItem(KEY_IS_GUEST_USER, true)
    global[KEY_IS_GUEST_USER] = true
}

export function logoutUser() {

    clearAsyncKeyData(KEY_USER_DATA)
    clearAsyncKeyData(KEY_USER_TOKEN)
    clearStack(KEY_AUTH)
    return
}
export async function saveUserData(loginData) {
    storeItem(KEY_USER_TOKEN, loginData.token)
    storeItem(KEY_USER_DATA, loginData)
    storeItem(KEY_IS_GUEST_USER, false)
    global[KEY_IS_GUEST_USER] = true
    global[KEY_USER_TOKEN] = loginData.token
    //clearStack(KEY_APP_NAVIGATOR)
}

export function isGuestUser() {
    if (global[KEY_IS_GUEST_USER] == true) {
        return true
    } else {
        return false
    }
}

// FILE EXTENSION FUNCTIONS
export function getFileExt(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('.').pop()
        return ext
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('.').pop()
        return ext
    }
}

export function isImage(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('.').pop()
        var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'heic'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('.').pop()
        var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'heic'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    }
}


export function isVideo(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('.').pop()
        // ext = ext[ext.length - 1].toLowerCase();
        var arrayExtensions = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mov'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('.').pop()
        var arrayExtensions = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mov'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    }
}

export function isDocument(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('.').pop()
        var arrayExtensions = ['docx', 'pages', 'txt', 'doc', 'ppt'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('.').pop()
        var arrayExtensions = ['docx', 'pages', 'txt', 'doc', 'ppt'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    }
}

export function isPdf(file) {

    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        var ext = file.split('.');
        ext = ext[ext.length - 1].toLowerCase();
        var arrayExtensions = ['pdf'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    } else {
        let path = file.substring(0, lastIndex)
        var ext = path.split('.');
        ext = ext[ext.length - 1].toLowerCase();
        var arrayExtensions = ['pdf'];
        if (arrayExtensions.lastIndexOf(ext) == -1) {
            return false
        } else {
            return true
        }
    }
}

export function getFileNameFromUrl(file) {
    let lastIndex = file.lastIndexOf("?X-A")
    if (lastIndex == -1) {
        let ext = file.split('/').pop()
        return ext
    } else {
        let path = file.substring(0, lastIndex)
        let ext = path.split('/').pop()
        return ext
    }
}

// NUMBER FUNCTIONS
export function getPrice(price) {
    return price + ' ' + Strings.aed
}

export function thousandSeprate(number) {
    return number
}

// STATUS BAR COLOR CHANGE
export function changeStatusBarTheme(barColor, barStyle) {
    if (Platform.OS == 'android') {
        StatusBar.setBackgroundColor(barColor)
        StatusBar.setBarStyle(barStyle)
    }
}