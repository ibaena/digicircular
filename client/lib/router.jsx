import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';


import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../app/home.jsx';
import Flyers from '../app/flyers.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {content:(<Home />)});
  }
});
FlowRouter.route('/flyers', {
  action(){
    mount(MainLayout, {content:(<Flyers />)});
  }
});
