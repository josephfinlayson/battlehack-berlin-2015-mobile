
import sharedModule from './shared/shared';
import MainClass from './app/index';
new MainClass();


let app = angular.module('pif', [sharedModule.name]);
angular.bootstrap(document, app.name);
