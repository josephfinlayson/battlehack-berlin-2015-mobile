'use strict';
import sharedModule from './shared/shared';
import componentsModule from './components/components';
import 'ionic';
import mainView from '../views/main.html!text';
import paymentView from '../views/payment.html!text';
import mapView from '../views/map.html!text';

import 'ionic-material/dist/ionic.material.min';
import 'ionic-material/dist/ionic.material.min.css!';
import 'ng-cordova/dist/ng-cordova.min';

const app = angular.module('pif', [
    'ionic',
    'ionic-material',
    'ngCordova',
    sharedModule.name,
    componentsModule.name
])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                template: mainView
            })

            // Each tab has its own nav history stack:

            .state('tab.map', {
                url: '/map',
                views: {
                    'tab-map': {
                        template: mapView
                    }
                }
            })

            .state('tab.payment', {
                url: '/payment',
                views: {
                    'tab-payment': {
                        template: paymentView
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/map');

    });

angular.bootstrap(document, [app.name]);
