import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Typo } from './components/pages/Typo.component';
import { Home } from './components/pages/Home/Home.component';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Redirect from='/' to='/typo' />
      <Route exact path="/typo" component={Typo} />
      <Route exact path="/services" component={Home} />
    </BrowserRouter>
  );
};
