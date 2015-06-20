'use strict';
import componentsModule from '../components.module';
import template from './charitiesView.html!text';

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
          image: 'http://lorempixel.com/400/200/1'  
        },
        {
          name: 'Test Charity 2',
          image: 'http://lorempixel.com/400/200/1'  
        }
      ];
    }
  };
});
