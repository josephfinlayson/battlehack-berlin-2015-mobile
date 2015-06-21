'use strict';
import modelsModule from './models.module';

class Charities {
  
  constructor($http) {
    this.$http = $http;
  }

  getCharities() {
    return this.$http.get('https://bh-berlin.herokuapp.com/api/charities').then((response) => {
      return response.data;
    });
    /*return this.$q.when([
      {
        _id: '1',
        name: 'Test Charity 1',
        description: 'Hello World This is fist charity',
        image: 'http://lorempixel.com/800/200',
        thumb: 'http://lorempixel.com/50/50',
        funds: 10000,
        points: 20000,
        coords: {
          type: 'Point',
          coordinates: [13, 52]
        }
      },
      {
        _id: '2',
        name: 'Test Charity 2',
        description: 'Land of Unicorns',
        image: 'http://lorempixel.com/800/200',
        thumb: 'http://lorempixel.com/50/50',
        funds: 4000,
        points: 14000,
        coords: {
          type: 'Point',
          coordinates: [12.9, 51.9]
        }
      }
    ]);*/
  }

  getCharity(id) {
    return this.getCharities().then((charities) => {
      return charities.filter((charity) => {
        return charity._id === id;
      })[0];
    });
  }
}

modelsModule.service('Charities', Charities);
