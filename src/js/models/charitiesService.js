'use strict';
import modelsModule from './models.module';


class Charities {

  constructor($http, PusherService) {
    this.$http = $http;
    this.pusher = PusherService;
    this.pusher.subscribe('charity');
  }

  getCharities() {
    return this.$http.get('https://bh-berlin.herokuapp.com/api/charities').then((response) => {
      return response.data;
    });
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
