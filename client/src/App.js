import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import WelcomePage from './pages/Welcome';
import CoreConceptsPage from './pages/Concepts';

function App(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/welcome' element={<WelcomePage />} />
                <Route path='/core-concepts' element={<CoreConceptsPage />} />
            </Routes>
        </Router>)
}

export default App;