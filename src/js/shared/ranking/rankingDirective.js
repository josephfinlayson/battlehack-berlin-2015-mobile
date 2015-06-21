import sharedModule from '../shared.module';
import template from './rankingView.html!text';
import './rankingStyles.css!';


sharedModule.directive('pifRanking', (Users) => {

  return {
    restrict: 'E',
    scope: {
      talent: '=',
      isActive: '='
    },
    replace: true,
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($scope) {
      let vm = this;

      Users.getUsers().then((users) => {
        $scope.users = users;
      });

    }
  }; 
});

