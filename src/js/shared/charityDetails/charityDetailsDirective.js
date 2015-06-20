import sharedModule from '../shared.module';
import template from './charityDetailsView.html!text';


sharedModule.directive('pifCharityDetails', ($http) => {

  return {
    restrict: 'E',
    scope: {
      charity: '='
    },
    replace: true,
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;
    }
  }; 
});

