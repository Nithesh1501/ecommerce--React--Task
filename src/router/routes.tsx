import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from '../pages/Book';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Orders from '../pages/Orders';

export default function routes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
            <Route path="book/:id" element={<Book />} />
        </Routes>
    );
}
