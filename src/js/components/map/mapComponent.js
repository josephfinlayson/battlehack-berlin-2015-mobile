'use strict';
import componentsModule from '../components.module';
import template from './mapView.html!text';
import './mapStyles.css!';
import _ from 'lodash';

componentsModule.directive('pifMapComponent', (Charities) => {
    return {
        template,
        link: (scope) => {

            const drawMarker = (map, imageUrl, lat, lng, title, zIndex = 1) => {
                new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: map,
                    icon: {url: imageUrl},
                    shape: {coords: [50, 50, 25], type: 'circle'},
                    title: title,
                    zIndex: zIndex,
                    optimized: false
                });
            };

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
                    Charities.getCharities().then((charities) => {
                        scope.charities = charities;

                        rollCharity();

                        _.each(charities, (element) => {
                            drawMarker(map, element.thumb, element.coords.coordinates[1], element.coords.coordinates[0], element.name);
                        });
                    });

                }
            );
        }
    };
});
