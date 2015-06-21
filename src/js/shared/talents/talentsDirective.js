import sharedModule from '../shared.module';
import template from './talentsView.html!text';


sharedModule.directive('pifTalents', ($state) => {

  return {
    restrict: 'E',
    scope: {
      charity: '=',
      charityUser: '='
    },
    template: template,
    controllerAs: 'vm',
    bindToController: true,
    controller($element) {
      let vm = this;

      vm.levels = [
        1000,
        10000
      ];

      vm.getProgressForLevel = function(level) {
        if (!vm.charityUser) {
          return 0;
        }
        return Math.min(
          vm.charityUser.points / vm.levels[level - 1], 
          100
        );
      };

      vm.isTalentActive = function(talent) {
        return talent % 3;
      };

      vm.talents = [
        {
          name: 'Ambassador',
          image: 'http://lorempixel.com/150/150'
        },
        {
          name: 'Pusher',
          image: 'http://lorempixel.com/150/150'
        },
        {
          name: 'Send E-mail',
          image: 'http://lorempixel.com/150/150'
        },
        {
          name: 'Send SMS',
          image: 'http://lorempixel.com/150/150'
        }
      ];
    }
  }; 
});

