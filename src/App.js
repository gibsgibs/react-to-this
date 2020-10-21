import React from 'react';
import { Route } from 'react-router';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './scss/main.scss';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/home';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
