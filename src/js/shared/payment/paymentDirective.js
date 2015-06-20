import sharedModule from '../shared.module';
import template from './paymentView.html!text';


sharedModule.directive('pif-payment', ($http) => {

  return {
    restrict: 'E',
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;

      let clientTokenUrl = 'http://bh-berlin.herokuapp.com/api/client-token';
      let postUrl = 'http://bh-berlin.herokuapp.com/api/payment-methods';

      $http.get(clientTokenUrl).then(function (resp) {
        return resp.data;
      }).then(function (token) {
        braintree.setup(
          // Replace this with a client token from your server
          token,
          'dropin', 
          {
            container: 'dropin'
          }
        );
      });

      vm.state = 'isInitial';
      vm.createTransaction = function () {
        vm.state = 'isLoading';

        var nonce = $element.find('[name="payment_method_nonce"]').val();
        vm.post(postUrl, {
            payment_method_nonce: nonce
        }).then(function () {
          vm.state = 'isCompleted';
        });
      };
    }
  }; 
});

