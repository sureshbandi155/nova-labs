import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Home } from './components/pages/Home/Home.component';
import { SingleBlog } from './components/Blogs/Blogs.SingleBlog';


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Redirect from='/' to='/home' />
      <Route exact path="/home" component={Home} />
      <Route exact path="/singleBlog" component={SingleBlog} />
    </BrowserRouter>
  );
};
