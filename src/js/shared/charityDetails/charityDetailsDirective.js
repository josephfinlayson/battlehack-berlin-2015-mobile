import sharedModule from '../shared.module';
import template from './charityDetailsView.html!text';


sharedModule.directive('pifCharityDetails', ($state) => {

  return {
    restrict: 'E',
    scope: {
      charity: '=',
      charityUser: '='
    },
    replace: true,
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;

      vm.isDonateState = ()=>{
        return $state.includes('tab.charity.donate');
      };
      vm.isTalentsState = () => {
        return $state.includes('tab.charity.talents');
      };
    }
  }; 
});

