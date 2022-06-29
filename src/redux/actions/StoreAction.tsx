import { ADD_ORDER, ADD_TO_CART, EMPTY_CART, UPDATE_MY_ADDRESS } from './ActionTypes';


export const addToCart = (book: any) => async (dispatch: any) => {
    dispatch({
        type: ADD_TO_CART,
        payload: book
    });
};

export const setAddress = (address: any) => async (dispatch: any) => {
    dispatch({
        type: UPDATE_MY_ADDRESS,
        payload: address
    });
};

export const emptyCart = () => (dispatch: any) => {
    dispatch({
        type: EMPTY_CART
    });
};

export const addToOrders = (orders: any) => (dispatch: any) => {
    dispatch({
        type: ADD_ORDER,
        payload: orders
    });
    dispatch(emptyCart());
};
