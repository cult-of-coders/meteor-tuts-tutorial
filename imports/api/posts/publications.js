import {Posts} from '/db';
import {Meteor} from "meteor/meteor";

Meteor.publish('posts', () => {
    return Posts.find();
});