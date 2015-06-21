'use strict';
import modelsModule from './models.module';
import _ from 'lodash';

function extractData(res) {
  return res.data;
}

let url = 'https://bh-berlin.herokuapp.com/api/users';

class Users {

  constructor($q, $http, PusherService) {
    this.$q = $q;
    this.$http = $http;
    this.pusher = PusherService;
    this.listenToUpdates(this.pusher.subscribe('users'));
    this.cache = {};
  }

  listenToUpdates(channel) {

    let updateSingleUser = (data) => {
      _.extend(this.cache[data._id], data);
    };

    channel.bind('update', updateSingleCharity);
    channel.bind('new', (data) => {

      _.extend(this.cache['all'], data);
      _.each(data, updateSingleCharity);

    });

  }

  getUsers() {
    if (this.cache['all']) {
      return this.$q.when(this.cache['all']);
    }

    return this.$http.get(url)
      .then(extractData)
      .then((charities) => {
        this.cache['all'] = charities;
        return charities;
      });
  }

  getCurrentUser() {
    return getUser(1);
  }

  getUser(id) {
    if (this.cache[id]) {
      return this.$q.when(this.cache[id]);
    }

    return this.getUsers().then((charities) => {
      return charities.filter((charity) => {
        return charity._id === id;
      })[0];
    }).then((charity) => {
      this.cache[id] = charity;
      return charity;
    });
  }

  updatePosition(email, newCoords) {
    return $http.post(url + '/' + email, newCoords);
  }

}

modelsModule.service('Users', Users);
