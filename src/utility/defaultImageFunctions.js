import { BASE } from "../redux/services/apiTypes";
import { Images } from "./imageRes";

//get default image functions
export function getUserImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getCategoryImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getBannerImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getDocumentImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getJobImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getDsImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getProjectsImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getProductsImage(url) {
    let path = Images.IMG_PRODUCT
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getStoreImage(url) {
    let path = Images.IMG_TAB_HOME
    if (url == null || url == '') {
        return path
    } else {
        path = getImageUrl(url)
        return { uri: path }
    }
}

export function getImageUrl(url) {
    if (url) {
        const str = url
        const n = str.includes("http");
        if (n) {
            return url
        }
        else {
            return BASE + url
        }
    }
}