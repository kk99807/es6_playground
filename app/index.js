import addToDom from './add_to_dom';
import calculator, { add, myArray } from './calculate';

addToDom('h3', `2 + 8 = ${add(2,8)}`);
console.log('My Array:', myArray);
calculator();