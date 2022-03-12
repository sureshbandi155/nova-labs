import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Typo } from './components/pages/Typo.component';
import { Home } from './components/pages/Home/Home.component';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Typo} />
        <Route path="/services" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
