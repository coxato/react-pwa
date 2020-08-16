import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import ShowCityWeather from './components/showCityWeather';
import ShowCountry from './components/showCountry';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShowCityWeather} />
        <Route exact path="/country" component={ShowCountry} />
        <Route exact path="/offline" component={() => <h1>you are offline</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
