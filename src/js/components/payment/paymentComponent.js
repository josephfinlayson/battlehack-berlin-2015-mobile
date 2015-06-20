import componentsModule from '../components.module';
import template from './paymentView.html!text';
import './paymentStyles.css!';

componentsModule.directive('pifPaymentComponent', () => {
  return {
    restrict: 'E',
    scope:{},
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller() {
      let vm = this;
    }
  }; 
});
