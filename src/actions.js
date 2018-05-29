export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataError = (err) => {
    return {
        type: 'LOAD_DATA_ERROR',
        error: err
    }
}

export const loadDataUARequest = () => {
    return {
        type: 'LOAD_DATA_UA_REQUEST'
    }
}

export const loadDataUASuccess = (data) => {
    console.log("data from loadDataUASuccess", data)
    return {
        type: 'LOAD_DATA_UA_SUCCESS',
        data
    }
}

export const loadDataUAError = (err) => {
    return {
        type: 'LOAD_DATA_UA_ERROR',
        error: err
    }
}