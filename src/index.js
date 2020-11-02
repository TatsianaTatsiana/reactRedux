import React from 'react';
import ReactDOM from 'react-dom';
import AppHooks from './AppHooks';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/hooks' component={AppHooks} />
        <Route path='/connect' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


