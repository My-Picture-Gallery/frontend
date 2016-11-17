import angular from 'angular';

import { HomeController } from './controllers/home';

angular
  .module('app', [])
  .controller('HomeController', HomeController);