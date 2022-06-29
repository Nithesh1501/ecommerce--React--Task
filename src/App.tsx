import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Routes from './router/routes';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}
