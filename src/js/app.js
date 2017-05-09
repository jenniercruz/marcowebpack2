import notification from './assets/modulo.js';

notification.log('here we go');
notification.announce('here we go as an alert');

class Form {
    constructor() {
        console.log("FORM CLASES");
        
        let numbers = [5, 10, 15].map(number => number * 2);
        console.log(numbers);
    }
}

new Form();
//require('./main.scss');