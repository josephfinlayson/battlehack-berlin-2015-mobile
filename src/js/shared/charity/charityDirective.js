import sharedModule from '../shared.module';
import template from './charityView.html!text';


sharedModule.directive('pifCharity', ($http) => {

  return {
    restrict: 'E',
    scope: {
      charity: '='
    },
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;
    }
  }; 
});

