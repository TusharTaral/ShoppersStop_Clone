import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

export const getDataFailure = () => {
    return {
        type: GET_DATA_FAILURE
    }
}


//filter by offer

export const getDatasByOffer = (data, offer) => (dispatch) => {


    dispatch(getDataRequest())

    if (offer !== '') {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: data,
                discount: offer,

            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
    else {
        return axios.get('', {
            params: {
                c: data,


            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
}