'use strict';
import modelsModule from './models.module';

class Charities {
  
  constructor($q) {
    this.$q = $q;
  }

  getCharities() {
    return this.$q.when([
      {
        _id: '1',
        name: 'Test Charity 1',
        description: 'Hello World This is fist charity',
        image: 'http://lorempixel.com/800/200',
        thumb: 'http://lorempixel.com/50/50',
        funds: 10000,
        points: 20000,
        coords: {
          lat: 54,
          lng: 16
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
          lat: 52,
          lng: 13
        }
      }
    ]);
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
