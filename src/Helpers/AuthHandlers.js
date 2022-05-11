import { CONSTANTS } from "./Constants.js"
import { createVendor } from "../Firebase/Admin/AuthFunctionHandlers";
import { forgetPassword, userLogin } from "../Firebase/GeneralHandlers";
import { admin_login_query, vendor_login_query, getSystemConfig, timestampToDays, organizationNumberQuery } from "./FetchHandlers";
import Swal from "sweetalert2";
import { phoneValidation } from "./Helper.js";


export const admin_login_handler = async (email, password, setCurrentUser, error, setError, setLoading) => {
    const userQuery = await admin_login_query(email)
    let userName = "Loading..."
    if (userQuery && userQuery.length > 0) {
        userName = userQuery[0].name
    }
    if (email === '' || password === '') {
        return
    }
    else if (userQuery.length === 0) {
        setError({ ...error, email: true })
    }
    else {
        setLoading(true)
        userLogin(email, password, setCurrentUser, error, setError, "admin", userName, setLoading)
    }
}

export const vendor_login_handler = async (email, password, setCurrentUser, error, setError, setLoading) => {
    const userQuery = await vendor_login_query(email)
    let userName = "Loading..."
    if (userQuery && userQuery.length > 0) {
        userName = userQuery[0].name
    }
    if (email === '' || password === '') {
        return
    }
    else if (userQuery.length === 0) {
        setError({ ...error, email: true })
    }
    else {
        setLoading(true)
        userLogin(email, password, setCurrentUser, error, setError, "vendor", userName, setLoading)
    }
}

export const forget_password_handler = async (email, setError, history) => {
    if (email === '') {
        return
    } else {
        forgetPassword(email, setError, history)
    }
}

export const create_vendor_handler = async ({ vendorData, setError, password, confirmPassword, cancelFunc, organizationError, setOrganizationError, phoneError, setPhoneError, setLoading, setShowAddedData, showAddedData, setChanges, emailError, setEmailError }) => {
    let tempError = false
    Object.keys(vendorData).map(key => vendorData[key] === '' ? tempError = true
        :
        vendorData[CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.VENDOR_AREA] === '' ?
            Swal.fire({
                title: CONSTANTS.STRINGS_LIST.EMPTY_STRING,
                text: CONSTANTS.STRINGS_LIST.SELECT_AREA,
            }) : 
            tempError)
    const organizationNumber = await organizationNumberQuery(vendorData.organizationNumber)
    const phoneValidate = phoneValidation(vendorData.contactNumber, setPhoneError)

    if (password === '' || confirmPassword === '') {
        return
    } else if (organizationNumber.length > 0) {
        setOrganizationError(true)
        return
    } else if (phoneValidate) {
        return
    } else if (phoneError && !tempError || emailError && !tempError) {
        Swal.fire({
            icon: 'error',
            title: CONSTANTS.STRINGS_LIST.EMPTY_STRING,
            text: CONSTANTS.STRINGS_LIST.FIX_ERROR,
        })
    }
    else if (tempError) {
        return
    } else if (password !== confirmPassword) {
        setError(true)
    } else if (organizationError && !tempError) {
        Swal.fire({
            icon: 'error',
            title: CONSTANTS.STRINGS_LIST.EMPTY_STRING,
            text: CONSTANTS.STRINGS_LIST.FIX_ERROR,
        })
    }
    else {
        let emptySpaceError = false
        Object.keys(vendorData).map(key => {
            if (typeof vendorData[key] === "string") {
                let question = vendorData[key].match(/\w+/g)
                return !question ? emptySpaceError = true : ''
            }
        })

        const tempData = await getSystemConfig("REp6lXl9OP6NmJUh6KrY", "system_config")
        const tempDates = timestampToDays(tempData.nonBookableDates)
        const data = {
            vendor_user: {
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CREATED_BY]: vendorData.createdById,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CREATED_ON]: vendorData.createdOn,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.EMAIL_ADDRESS]: vendorData.emailAddress,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.IS_ACTIVE]: vendorData.isActive,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.MODIFIED_BY]: vendorData.modifiedById,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.MODIFIED_ON]: vendorData.modifiedOn,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.NAME]: vendorData.contactPersonName,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.VENDOR_ID]: ''
            },
            vendor_profile: {
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.ADDRESS]: vendorData.address,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.VENDOR_CITY]: vendorData.vendorCity.toLowerCase(),
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CONTACT_EMAIL]: vendorData.emailAddress,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CONTACT_NUMBER]: vendorData.contactNumber,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CONTACT_PERSON_NAME]: vendorData.contactPersonName,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CREATED_BY]: vendorData.createdById,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CREATED_ON]: vendorData.createdOn,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.MODIFIED_ON]: vendorData.modifiedOn,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.MODIFIED_BY]: vendorData.modifiedById,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.NAME]: vendorData.name,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.ORGANIZATION_NUMBER]: vendorData.organizationNumber,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.POSTAL_CODE]: vendorData.postalCode,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.STATUS]: vendorData.status,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.VENDOR_AREA]: vendorData.vendorArea.value.toLowerCase(),
                //below fields added to push
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.CITY]: '',
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.SORT_INDEX]: CONSTANTS.STRINGS_LIST.DEFAULT_INDEX_NUMBER,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.LOCATIONS]: [],
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.BOOK_BEFORE_DAYS]: Number(2),
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.DESCRIPTION]: '',
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.IS_DELIVERY_ENABLED]: true,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.IS_PICKUP_ENABLED]: false,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.IS_SUPPLEMENT_ENABLED]: false,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.LOGO_IMAGE_URL]: '',
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.MAXIMUM_ORDER_CAPACITY]: Number(500),
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.NON_BOOKABLE_DATES]: tempDates,
                [CONSTANTS.FIELDS.CREATE_VENDOR_KEYS.SUPPLEMENT_MARKUP]: Number(0),
            }
        }
        if (!emptySpaceError) {
            setLoading(true);
            createVendor(data.vendor_user.emailAddress, password, data, cancelFunc, setLoading, setShowAddedData, showAddedData, setChanges)
        } else if (emptySpaceError) {
            Swal.fire({
                icon: 'error',
                title: CONSTANTS.STRINGS_LIST.EMPTY_STRING,
                text: CONSTANTS.STRINGS_LIST.FIELD_NOT_EMPTY,
            })
        }
    }
}
