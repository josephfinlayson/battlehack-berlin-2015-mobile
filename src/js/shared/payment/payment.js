/*
  var clientTokenUrl = 'http://bh-berlin.herokuapp.com/api/client-token';
  var postUrl = 'http://bh-berlin.herokuapp.com/api/payment-methods';

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


  $scope.state = 'isInitial';
  $scope.createTransaction = function () {
    $scope.state = 'isLoading';

    var nonce = document.querySelector('[name="payment_method_nonce"]').value;
    $http.post(postUrl, {
        payment_method_nonce: nonce
    }).then(function () {
      $scope.state = 'isCompleted';
    });
  };

      <ion-spinner
              ng-if="state === 'isLoading'"
              ></ion-spinner>
          <h1
              ng-if="state === 'isCompleted'"
              >
            Payment Completed.
          </h1>
          <form 
              ng-if="state === 'isInitial'"
              method="post" 
              ng-submit="createTransaction()">
            <div id="dropin"></div>
            <input type="submit" value="Pay $300">
          </form>

 
 */
