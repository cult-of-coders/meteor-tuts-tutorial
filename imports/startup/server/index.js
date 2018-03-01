import moment from 'moment';
import {sum} from './helpers';
import myService from '/imports/startup/server/myService';

const today = moment(new Date()).format('YYYY-MM-DD');

console.log(today);
console.log(sum(2,5));
console.log(myService.multiply(3,10));