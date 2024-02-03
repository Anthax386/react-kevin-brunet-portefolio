import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/main.scss'

import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Technos from './Components/Technos'
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Header />
        <main>
            <About />
            <Works />
            <Technos />
        </main>
        <Footer />  
    </React.StrictMode>
)