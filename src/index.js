import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './view/layout';


function render() {
  ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={Layout} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(() => render())
}
