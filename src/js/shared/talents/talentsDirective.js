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
        return Math.min(
          vm.charityUser.points / vm.levels[level - 1], 
          100
        );
      };

      vm.isTalentActive = function(talent) {
        return true;
      };

      vm.talents = [
        {
          name: 'Ambassador',
          image: 'http://lorempixel.com/100/100'
        },
        {
          name: 'Pusher',
          image: 'http://lorempixel.com/100/100'
        },
        {
          name: 'Send E-mail',
          image: 'http://lorempixel.com/100/100'
        }, 
        {
          name: 'Send SMS',
          image: 'http://lorempixel.com/100/100'
        }
      ];
    }
  }; 
});

