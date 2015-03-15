'use strict';

angular
    .module('app.new', [])
    .controller('NewController', [NewController]);

function NewController(){
  this.status = "working";
}