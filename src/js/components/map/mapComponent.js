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
        return new google.maps.Marker({
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
              element.thumb = element.thumb || 'http://lorempixel.com/50/50';
              let marker = drawMarker(map, element.thumb, element.coordinates.latitude, element.coordinates.longitude, element.name);
              var infowindow = new google.maps.InfoWindow({
                content: element.description
              });
              google.maps.event.addListener(marker, 'click', () => {
                infowindow.open(map, marker);
              });
            });
          });

        }
      );
    }
  };
});