import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import StoreReducer from './StoreReducer';

export default combineReducers(
    {
        books: BookReducer,
        store: StoreReducer
    }
);
