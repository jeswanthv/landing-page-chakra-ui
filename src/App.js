import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
