import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import flashMessage from "../../components/common/CustomFlashAlert";
import { logoutUser } from "../../utility/commonFunctions";
import { KEY_USER_TOKEN } from "../../utility/constants";


const ourRequest = axios.CancelToken.source()

export default async (method) => {
    let networkStatus = undefined;
    await NetInfo.fetch().then(state => {
        dropConsoleLog('NETINFO ME AAYA', "")
        networkStatus = state.isConnected;
    });
    if (networkStatus != undefined && networkStatus) {
        return new Promise((resolve, reject) => {
            callApi(method, resolve, reject)
        })
    } else {
        return flashMessage("You are offline.", "danger");
    }
}

export async function callApi(method, resolve, reject) {



    let headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    }

    if (global[KEY_USER_TOKEN]) {
        headers.Authorization = `Token ${global[KEY_USER_TOKEN]}`
    }
    let axiosData = {
        method: method.apiType,
        headers: headers,
        url: method.type,
        cancelToken: ourRequest.token
    }

    dropConsoleLog('API HEADER', JSON.stringify(headers))
    dropConsoleLog('API URL', axiosData.url)
    dropConsoleLog('API PAYLOAD', method.payload)

    if (method.apiType === 'GET') {

    }
    else {
        var formData = await getFormData(method.payload)
        axiosData.data = formData
    }

    try {
        let response = await axios(axiosData)
        checkResponse(response, resolve, reject)
    } catch (err) {
        dropConsoleLog('API ERROR', JSON.stringify(err))

        let response = err.response;
        if (response) {
            checkResponse(response, resolve, reject)
        }
        else {
            reject(err.message ? { error: err.message } : { error: "Something Went Wrong" });
            return
        }
    }
}

function checkResponse(response, resolve, reject) {
    dropConsoleLog('API STATUS', response.status)
    dropConsoleLog('API RESPONSE', JSON.stringify(response.data))
    if (response.status === 200 || response.status === 201 || response.status === 204) { //success
        resolve(response.data);
        return
    }
    else if (response.status === 401) {
        logoutUser()
        ourRequest.cancel()
        reject(response.data);
        return
    }
    else if (response.status === 400) {
        reject(response.data);
        return
    }
    else if (response.status === 500) { //internal server error
        reject({ err: "Something Went Wrong" });
        return
    }
    else {
        reject(response);
        return
    }
}

function getFormData(data) {
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
        if (key === 'installments') {
            formData.append(`${key}`, JSON.stringify(value))
        }
        else if (key !== 'installments' && Array.isArray(value) === true) {
            for (var i = 0; i < value.length; i++) {
                formData.append(`${key}`, value[i]);
            }
        }
        else {
            formData.append(`${key}`, value);
        }
    }
    return formData
}

function dropConsoleLog(label, data) {
    console.log('====================LOG START========================')
    console.log('' + label + ':', data)
    console.log('=====================LOG END=========================')
}