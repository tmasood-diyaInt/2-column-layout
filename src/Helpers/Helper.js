import { CONSTANTS } from './Constants';
import { removeItemsLocally, setItemsLocally } from "../LocalStorage/LocalStorage"
import Swal from "sweetalert2"
import swal from 'sweetalert';

export const submitHandler = e => e.preventDefault()

export const edit_vendor_handler = ({ vendorData, password, confirmPassword, edit, cancelFunc, setError, phoneError, setLoading, setShowAddedData, showAddedData, setChanges }) => {
    return false
}

export const phoneValidation = (value, setPhoneError) => {
    let checkValue = value.replace(/\s/g, '')
    let regex = /^(\+\d{1,2}\s?)(\d{7}|\d{9})$/
    if (regex.test(checkValue) === false || value === '') {
        setPhoneError(true)
        return false
    } else {
        setPhoneError(false)
    }
}

export const emailValidation = (value, setEmailError) => {
    const check = value
    let regex = /^([a-zA-Z\d\.\-_]+)@([a-zA-Z\d\.\-_]+)\.([a-zA-Z]){2,7}$/
    if (regex.test(check) === false) {
        setEmailError(true)
        return false
    } else {
        setEmailError(false)
    }
}

export const capitalizeFirstLetter = (string) => {
    // If string is character, return it
    if (typeof string !== 'string') {
        return string;
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export const capitalizeString = (str) => {
    str.split('').forEach((char, index) => {
        char = char.toUpperCase();
        str = str.replace(str[index], char);
    });
    return str;
}

export const faq_edit_handler = async (data, index, setModal) => {
    setModal(true)
    setItemsLocally("FAQ", { ...data, index })
}

// Function to remove excess whitespaces at the start and end of the string
export const trim = (str) => {
    return str.replace(/^\s+|\s+$/g, '');
}

// Function to validate URL
export const validateURL = (url) => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regex.test(url)) {
        return true
    } else {
        return false
    }
}

export const isEmpty = (value) => {
    if (value === '' || value === null || value === [] || value === undefined) {
        return true;
    } else {
        return false;
    }
}

export const askConfimation = (setChanges, btnEvent, setState) => {
    if (btnEvent) {
        swal({
            text: CONSTANTS.STRINGS_LIST.ARE_YOU_SURE,
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setChanges(false)
                    setState(false)
                }
            });
    } else {
        window.onbeforeunload = (event) => {
            const e = event || window.event;
            event.preventDefault();
            if (e || btnEvent) {
                const res = window.confirm(CONSTANTS.STRINGS_LIST.ARE_YOU_SURE)
                if (res) {
                    setChanges(false)
                    return true
                }
                else {
                    return false
                };
            }
        }
    }
}

export const onChangeRoute = (setChanges) => {
    const res = window.confirm(CONSTANTS.STRINGS_LIST.ARE_YOU_SURE)
    if (res) {
        setChanges(false)
        return true
    }
    else return false;
}

// Function to check if the text is a string or a number
export const isString = (text) => {
    if (typeof text === 'string') {
        return true;
    } else {
        return false;
    }
}

// Convert seconds to HHMM format
export const convertSecondsToHHMM = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    // Convert time to HHMM format
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const time = hours.toString() + minutes.toString();
    return time;
}

// Convert seconds to HHMM 12format
export const convertSeconds = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    // Convert time to HHMM format
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const time = hours.toString() + ":" + minutes.toString();
    return time;
}

// Function to check if link is of an image or not
export const isImage = (link) => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regex.test(link)) {
        return true
    } else {
        return false
    }
}

export const selectOptions = async (value) => {
    let _value = [], updatedValue = [];
    if (Array.isArray(value)) {
        _value = value
    }
    else {
        _value.push(value);
    }
    _value.map((data) => {
        updatedValue.push({ 'label': capitalizeFirstLetter(data), 'value': data })
    })
    return updatedValue
}

export const cancelCreationFunction = (event, changes, setState, setChanges) => {
    if (changes) {
        askConfimation(setChanges, event, setState)
    }
    else {
        removeItemsLocally(CONSTANTS.LOCAL_STORAGE_ITEMS.EDIT_KEY);
        setState(false)
        setChanges(false)
    }
}
export const storeImages = async (folderName, fileName, file) => {
    return false
}

export const deleteDocument = async (collectionName, docId, subCollectionName, subDocId) => {
    return false
}