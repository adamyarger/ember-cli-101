import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.email',
		'model.firstName',
		'model.lastName',
		'model.twitter',
		function() {
			return !Ember.isEmpty(this.get('model.email')) &&
			!Ember.isEmpty(this.get('model.firstName')) &&
			!Ember.isEmpty(this.get('model.lastName')) &&
			!Ember.isEmpty(this.get('model.twitter'));
		}
	),
	actions: {
		save() {
			if(this.get('isValid')) {
				var _this = this;
				this.get('model').save().then(function(friend) {
					_this.transitionToRoute('friends.show', friend);
				}); 
			} else {
				this.set('errorMessage', 'You need to fill form');
			}
			return false;
		},
		cancel() {
			this.transitionToRoute('friends.show', this.get('model'));
			return false;
		}
	}
});
