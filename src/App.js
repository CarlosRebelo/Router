import React, { Component } from 'react';
import Home from './components/Home'
import AwesomeStore from './components/products/AwesomeStore'
import AwesomeAnime from './components/anime/AwesomeAnime'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import './App.css';
import './Nav.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/anime'>Anime</Link>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={AwesomeStore}/>
        <Route path='/anime' component={AwesomeAnime}/>
        </div>
      </Router>
    )
  }
}

export default App;
