'use strict';
import componentsModule from '../components.module';
import template from './charitiesView.html!text';
import './charitiesStyles.css!css';

componentsModule.directive('pifCharitiesComponent', ($ionicSideMenuDelegate) => {

  return {
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller() {
      let vm = this;
      vm.charities = [
        {
          name: 'Test Charity 1',
          description: 'Hello World This is fist charity',
          image: 'http://lorempixel.com/800/200',
          funds: 10000,
          points: 20000

        },
        {
          name: 'Test Charity 2',
          description: 'Land of Unicorns',
          image: 'http://lorempixel.com/800/200',
          funds: 4000,
          points: 14000
        }
      ];
    }
  };
});
