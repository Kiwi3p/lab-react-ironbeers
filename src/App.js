import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/beers'
import NewBeer from './components/new-beer';
import RandomBeer from './components/random-beer';
import Navbar from './components/Navbar';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/add" component={NewBeer} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route exact path="/beers/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
