'use strict';
import componentsModule from '../components.module';
import template from './mapView.html!text';
import './mapStyles.css!';
import _ from 'lodash';

componentsModule.directive('pifMapComponent', (Charities, $timeout) => {
  return {
    template,
    controllerAs: 'vm',
    link: (scope) => {

      let isDestroyed;

      function rollCharity() {
        let a = scope.charities;
        scope.currentCharity = a[Math.floor(Math.random() * a.length)];
        if (isDestroyed) {
          return;
        }

        $timeout(rollCharity, 5000);
      }

      scope.$on('$destroy', ()=>{
        isDestroyed = true;
      });

      scope.$on('mapInitialized', (event, map) => {
        map.setCenter(new google.maps.LatLng(52, 13));
        map.setZoom(10);
        Charities.getCharities().then((charities)=>{

          scope.charities = charities;

          rollCharity();

          _.each(charities, (element) => {
            new google.maps.Marker({
                position: new google.maps.LatLng(element.lat, element.lng),
                map: map,
                title: 'Hello World!'
            });
          });
        });
      });

    }
  };
});
