'use strict';
import sharedModule from './shared/shared';
import componentsModule from './components/components';


let app = angular.module('pif', [
    sharedModule.name, componentsModule.name
]);
angular.bootstrap(document, [app.name]);
