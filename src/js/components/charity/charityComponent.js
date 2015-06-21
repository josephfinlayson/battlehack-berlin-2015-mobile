'use strict';
import componentsModule from '../components.module';
import template from './charityView.html!text';
import './charityStyles.css!css';

componentsModule.directive('pifCharityComponent', ($stateParams,  Charities, Users) => {

  return {
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller($rootScope) {
      let vm = this;
      var id = $stateParams.id;

      Charities.getCharity(id).then((charity)=>{
        vm.charity = charity;

        Users.getCurrentUser().then((user)=>{
          vm.charityUser = user.charities[charity._id];
        });

        $rootScope.title = vm.charity.name;
      });
    }
  };
});
