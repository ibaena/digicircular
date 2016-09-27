import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';


import {MainLayout} from '../layouts/main-layout.jsx';
import {AdminLayout} from '../layouts/admin-layout.jsx';
import Home from '../app/home.jsx';
import Flyers from '../app/flyers.jsx';
import Admin from '../app/admin.jsx';

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
FlowRouter.route('/admin', {
  action(){
    if (!Meteor.userId()) {
         Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
         FlowRouter.redirect('/');
       }else{
         mount(AdminLayout, {content:(<Admin />)});
      }
  }
});
