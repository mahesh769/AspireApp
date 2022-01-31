import flashMessage from '../components/common/CustomFlashAlert';

export function getErrorMessage(data) {
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                flashMessage(`${key.toUpperCase()}: ${value[i]}`, 'danger')
                return (value[i])
            }
        } else {
            flashMessage(`${key.toUpperCase()}: ${value}`, 'danger')
        }
    }
    // if (Array.isArray(data)) {
    //     for (let i = 0; i < data.length; i++) {
    //         for (const [key, value] of Object.entries(data[i])) {
    //             flashMessage(`${key.toUpperCase()}: ${value}`, 'danger')
    //             return (value)
    //         }
    //     }
    // } else {
    //     flashMessage(data, 'danger')
    // }
}

export function isEmptyObject(obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}