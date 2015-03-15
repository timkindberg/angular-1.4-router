'use strict';

angular.module('app', [
  'ngNewRouter',
  'app.home',
  'app.new'
]).controller('AppController', ['$router', AppController]);

function AppController($router){
  this.status = "working";
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' },
    { path: '/new', component: 'new' }
  ]);
}