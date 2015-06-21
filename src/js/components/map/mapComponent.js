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

            scope.$on('mapInitialized', (event, map) => {
                    map.setCenter(new google.maps.LatLng(52, 13));
                    map.setZoom(10);
                    Charities.getCharities().then((charities) => {
                        _.each(charities, (element) => {
                            drawMarker(map, element.thumb, element.coords.coordinates[1], element.coords.coordinates[0], element.name);
                        });
                    });

                }
            );
        }
    };
});