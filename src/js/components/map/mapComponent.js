'use strict';
import componentsModule from '../components.module';
import template from './mapView.html!text';
import './mapStyles.css!';
import _ from 'lodash';

componentsModule.directive('pifMapComponent', (Charities) => {
	return {
		template,
		link: (scope) => {
			scope.$on('mapInitialized', (event, map) => {
					map.setCenter(new google.maps.LatLng(52, 13));
					map.setZoom(10);
					const charities = Charities.getCharities();
					_.each(charities, (element) => {
						new google.maps.Marker({
							position: new google.maps.LatLng(element.lat, element.lng),
							map: map,
							title: 'Hello World!'
						});
					});
				}
			);

		}
	};
});