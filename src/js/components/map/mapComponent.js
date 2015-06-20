import componentsModule from '../components.module';
import mapTemplate from './mapView.html!text';
import './mapStyles.css!';

componentsModule.directive('pifMapComponent', () => {
	return {
		template: mapTemplate,
		link: (scope) => {
			scope.$on('mapInitialized', function(event, map) {
					map.setCenter(new google.maps.LatLng(-25.363882, 131.044922));
					map.setZoom(8);
				}
			)
		}
	};
});