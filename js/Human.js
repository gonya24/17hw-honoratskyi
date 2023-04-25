'use strict';
function Human (hName,hAge)  {
    this.name = hName;
    this.age = hAge;
    this.showInfoHuman = function() {
        console.log(`Iнфо: \nІм\'я: ${this.name}\nВік: ${this.age}` );
        
    }
}