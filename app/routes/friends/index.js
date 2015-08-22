import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('friend');
  },
  actions: {
  	delete(friend) {
  		friend.destroyRecord();
  		return false;
  	}
  }
});