import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BreakingBadCharacters from './components/characters/BreakingBadCharacters';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={BreakingBadCharacters} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
