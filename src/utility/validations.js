import Strings from "../translation/language"

export function validateEmail(mail) {
    if (mail == '') {
        return ({ msg: Strings.error_empty_email, success: false })
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return ({ msg: Strings.error_invalid_email, success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function isInputEmpty(value) {
    if (value == '') {
        return ({ msg: '', success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function isArrayEmpty(value) {
    if (value == '' || value == []) {
        return ({ msg: '', success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function validatePassword(password) {
    if (password == '') {
        return ({ msg: Strings.error_empty_password, success: false })
    }
    if (password.length < 8) {
        return ({ msg: Strings.error_password_min_character, success: false })
    }
    if (password.search(/[a-z]/i) < 0) {
        return ({ msg: Strings.error_password_lower_case, success: false })
    }
    if (password.search(/[A-Z]/) < 0) {
        return ({ msg: Strings.error_password_upper_case, success: false })
    }
    if (password.search(/[0-9]/) < 0) {
        return ({ msg: Strings.error_password_digit, success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword == '') {
        return ({ msg: Strings.error_empty_confirm_password, success: false })
    }
    else if (confirmPassword !== password) {
        return ({ msg: Strings.error_password_confirm_password_not_match, success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}

export function validateMobileNumber(number) {
    var mob = /^[0-9]{9}$/;
    if (number === "") {
        return ({ msg: Strings.error_empty_mobile_number, success: false })
    } else if (mob.test(number) == false) {
        return ({ msg: Strings.error_invalid_mobile_number, success: false })
    }
    return ({ msg: '', success: true })
}

export function validateUserName(username) {
    if (username == '') {
        return ({ msg: Strings.error_empty_username, success: false })
    }
    else if (!/^(?=[a-zA-Z0-9._]{8,20}$)[^_.].*[^_.]$/.test(username)) {
        return ({ msg: Strings.error_invalid_username, success: false })
    }
    else {
        return ({ msg: '', success: true })
    }
}