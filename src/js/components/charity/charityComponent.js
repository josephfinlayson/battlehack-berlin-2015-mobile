'use strict';
import componentsModule from '../components.module';
import template from './charityView.html!text';
import './charityStyles.css!css';

componentsModule.directive('pifCharityComponent', ($stateParams,  Charities) => {

  return {
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller($rootScope) {
      let vm = this;
      var id = $stateParams.id;
      vm.id = id;
      Charities.getCharity(id).then((charity)=>{
        vm.charity = charity;
        vm.charityUser = {
          points: 1000,
          lvl: 1
        };
        $rootScope.title = vm.charity.name;
      });
    }
  };
});
