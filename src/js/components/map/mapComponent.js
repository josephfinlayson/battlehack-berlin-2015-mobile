'use strict';
import componentsModule from '../components.module';
import mapTemplate from './mapView.html!text';
import './mapStyles.css!';

componentsModule.directive('pifMapComponent', () => {
	return {
		template: mapTemplate,
		link: (scope) => {
			scope.$on('mapInitialized', (event, map) => {
					map.setCenter(new google.maps.LatLng(52, 13));
					map.setZoom(10);
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(52, 13),
						map: map,
						title: 'Hello World!'
					});
				}
			)
		}
	};
});