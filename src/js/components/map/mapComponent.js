import componentsModule from '../components.module';
import mapTemplate from './mapView.html!text';
import './mapStyles.css!';

componentsModule.directive('pifMapComponent', () => {
	return {
		template: mapTemplate,
		link: (scope) => {
			scope.map = { 
				center: { 
					latitude: 45,
					longitude: -73 
				}, 
				zoom: 8 
			};
		}
	};
});