import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';


import {MainLayout} from '../layouts/main-layout.jsx';
import {AdminLayout} from '../layouts/admin-layout.jsx';
import Home from '../app/home.jsx';
import Coupons from '../app/coupons.jsx';
import Alphabetical from '../app/alphabetical.jsx';
import Admin from '../app/admin.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {content:(<Home />)});
  }
});
FlowRouter.route('/:movie/:id', {
  action(){
    mount(MainLayout, {content:(<Alphabetical />)});
  }
});
FlowRouter.route('/coupons', {
  action(){
    mount(MainLayout, {content:(<Coupons />)});
  }
});
FlowRouter.route('/alphabetical', {
  action(){
    mount(MainLayout, {content:(<Alphabetical />)});
  }
});
FlowRouter.route('/admin', {
  action(){
    if (!Meteor.userId()) {
         Bert.alert('Please Login', 'danger', 'fixed-top', 'fa-frown-o');
         FlowRouter.redirect('/');
       }else{
         mount(AdminLayout, {content:(<Admin />)});
      }
  }
});
