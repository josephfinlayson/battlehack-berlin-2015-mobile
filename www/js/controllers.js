angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $http) {
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

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
    //});

$scope.chats = Chats.all();
$scope.remove = function(chat) {
  Chats.remove(chat);
}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
