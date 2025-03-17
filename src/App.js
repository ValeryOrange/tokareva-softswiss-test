import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routing from './routes';
import './App.scss';

function App() {
    return (
        <HashRouter>
            <Routing />
        </HashRouter>
    );
}

export default App;
