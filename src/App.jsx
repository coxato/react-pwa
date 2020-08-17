import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import ConectionHOC from "./components/ConectionContext";
import ShowCityWeather from './components/showCityWeather';
import ShowCountry from './components/showCountry';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ConectionHOC>
          <Route exact path="/" component={ShowCityWeather} />
          <Route exact path="/country" component={ShowCountry} />
        </ConectionHOC>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
