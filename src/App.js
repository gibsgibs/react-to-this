import React from 'react';
import { Route } from 'react-router';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './scss/main.scss'

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Siphry } from './components/Siphry';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/siphry" component={Siphry} />
    </div>
  );
}

export default App;
