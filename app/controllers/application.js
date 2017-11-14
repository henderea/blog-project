import Ember from 'ember';

export default Ember.Controller.extend({
  previewing: false,
  actions: {
    togglePreview() {
      this.set('previewing', !this.get('previewing'));
    },
    addPost() {
      this.store.createRecord('post', {
        title: this.get('newTitle'),
        content: this.get('newContent')
      }).save();
      this.set('newTitle', '');
      this.set('newContent', '');
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
