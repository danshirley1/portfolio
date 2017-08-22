import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import About from '../containers/About';
import Home from '../containers/Home';
import Portfolio from '../containers/Portfolio';

import '../assets/styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />        
        </header>

        <main>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
        </main>

        {/* Footer */}
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; www.danshirley.co.uk 2017</p>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;