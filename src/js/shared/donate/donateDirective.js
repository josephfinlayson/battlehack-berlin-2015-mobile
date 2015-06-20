import sharedModule from '../shared.module';
import braintree from 'braintree-web';
import template from './donateView.html!text';


sharedModule.directive('pifDonate', ($http) => {

  return {
    restrict: 'E',
    scope: {
      charityId: '='
    },
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;

      let clientTokenUrl = 'https://bh-berlin.herokuapp.com/api/client-token';
      let postUrl = 'https://bh-berlin.herokuapp.com/api/charities/' + vm.charityId + '/payment';

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

