import { Meteor } from 'meteor/meteor';
import UserSchema from './schema';
const Users = Meteor.users;

Users.attachSchema(UserSchema);

export default Users;