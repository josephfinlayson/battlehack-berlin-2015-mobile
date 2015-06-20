import componentsModule from '../components.module';
import template from './paymentView.html!text';

componentsModule.directive('pifPaymentComponent', () => {
  return {
    restrict: 'E',
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller() {
      let vm = this;
    }
  }; 
});
