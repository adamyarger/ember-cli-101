import Ember from 'ember';

export default Ember.Route.extend({
  //
  // Here we are using ES6 syntax for functions!
  // We can use this out of the box with ember-cli
  // thanks to the addon ember-cli-babel
  //
  // To learn more about ES6, check http://s.abuiles.com/bwWo
  //
  model() {
    return this.store.findAll('friend');
  }
});