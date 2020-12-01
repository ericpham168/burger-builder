import axiosIN from '../../../Axios-order';
import * as actionTypes from './actionTypes';


export const orderStartHandler = () => {
    return {
        type: actionTypes.ORDER_START,
    }
}

export const orderSuccessHanler = () => {
    return {
        type: actionTypes.SEND_ORDER_SUCCESS,
    }
}


export const orderFailedHanler = () => {
    return {
        type: actionTypes.SEND_ORDER_SUCCESS,
    }
}



export const sendOrder = (order) => {
    return dispatch => {
        dispatch(orderStartHandler())
        axiosIN.post('/order.json', order)
            .then(respone => {
                dispatch(orderSuccessHanler())
            })
            .catch(err => {
                dispatch(orderFailedHanler())
            });
    }
};