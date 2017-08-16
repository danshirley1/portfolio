import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import About from '../containers/About';
import Home from '../containers/Home';

import '../assets/styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />        

        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </div>

        {/* Footer */}
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
            </div>
        </footer>

      </div>
    );
  }
}

export default App;