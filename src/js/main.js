
import angular from 'angular';
import sharedModule from './shared/shared';
import componentsModule from './components/components.module';


let app = angular.module('pif', [
    sharedModule.name, componentsModule.name
]);
angular.bootstrap(document, app.name);
