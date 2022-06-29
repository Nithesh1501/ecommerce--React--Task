import axios from 'axios';
import { FETCH_BOOK_FAIL, FETCH_BOOK_LOADING, FETCH_BOOK_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, SET_HEADER_SUB_TITLE } from './ActionTypes';

const fetchBookLoading = () => {
    return {
        type: FETCH_BOOK_LOADING
    };
};

const fetchBookSuccess = (book: any) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: book
    };
};

const fetchBookByIdSuccess = (book: any) => {
    return {
        type: FETCH_BOOK_BY_ID_SUCCESS,
        payload: book
    };
};

const fetchBookFail = () => {
    return {
        type: FETCH_BOOK_FAIL
    };
};

const setHeaderSubTitleSuccess = (title: string) => {
    return {
        type: SET_HEADER_SUB_TITLE,
        payload: title
    };
};

export const fetchBook = () => async (dispatch: any) => {
    try {
        dispatch(fetchBookLoading());
        const res = await axios.get('http://localhost:3000/books');
        dispatch(fetchBookSuccess(res.data));
    } catch (err) {
        dispatch(fetchBookFail());
    }
};

export const fetchBookById = (id: string) => async (dispatch: any) => {
    try {
        dispatch(fetchBookLoading());
        const res = await axios.get(`http://localhost:3000/books/${id}`);
        dispatch(setHeaderSubTitleSuccess(res.data.title));
        dispatch(fetchBookByIdSuccess(res.data));
    } catch (err) {
        dispatch(fetchBookFail());
    }
};

export const setHeaderSubTitle = (subTitle: string) => async (dispatch: any) => {
    dispatch(setHeaderSubTitleSuccess(subTitle));
};
