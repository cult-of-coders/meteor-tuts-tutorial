import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';
import Security from '/imports/api/security';

Meteor.methods({
    'post.create'(post) {
        Security.checkLoggedIn(this.userId);
        post.userId = this.userId;
        Posts.insert(post);
    },

    'post.list' () {
        return Posts.find().fetch();
    },

    'post.edit' (_id, postData) {
        Posts.update({_id: _id, userId: this.userId}, {
            $set: {
                title: postData.title,
                description: postData.description
            }
        });
    },

    'post.remove' (_id){
        Posts.remove({_id: _id, userId: this.userId});
    },

    'post.get' (_id) {
        return Posts.findOne(_id);
    }
});