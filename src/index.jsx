import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/main.scss'

import Header from './Components/Header';
import Home from './pages/Home';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </main>
            <Footer />
        </Router>
    </React.StrictMode>
)