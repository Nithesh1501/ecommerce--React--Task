import { FETCH_BOOK_FAIL, FETCH_BOOK_LOADING, FETCH_BOOK_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, SET_HEADER_SUB_TITLE } from '../actions/ActionTypes';

const initialState = {
    isLoading: false,
    books: [],
    isError: false,
    book: {},
    subTitle: ''
};

function BookReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_BOOK_LOADING:
            return {
                ...state,
                isLoading: true,
                books: [],
                isError: false,
                book: {}
            };
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.payload,
                isError: false,
                book: {}
            };
        case FETCH_BOOK_FAIL:
            return {
                isLoading: false,
                books: [],
                isError: true
            };
        case FETCH_BOOK_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                book: action.payload,
                isError: false
            };
        case SET_HEADER_SUB_TITLE:
            return {
                ...state,
                subTitle: action.payload
            };
        default:
            return state;
    }
}

export default BookReducer;
