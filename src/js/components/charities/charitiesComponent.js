'use strict';
import componentsModule from '../components.module';
import template from './charitiesView.html!text';

import './charitiesService';
import './charitiesStyles.css!css';

componentsModule.directive('pifCharitiesComponent', (Charities) => {

  return {
    template: template,
    bindToController: true,
    controllerAs: 'vm',
    controller() {
      let vm = this;
      Charities.getCharities().then((charities) => {
        vm.charities = charities;
      });
   }
  };
});
