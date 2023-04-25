'use strict';
function Car (cBrand,cModel,cYear,cNumber)  {
    
    this.brand = cBrand;
    this.model = cModel;
    this.year = cYear;
    this.number = cNumber;
    this.ownerCar = function(cOwner)  {
        if (cOwner.age < 18) {
        console.log(`${cOwner.name},ви не можете бути власником. Вам ще немає 18 років!`); 
        } else {
        this.owner = cOwner;
        console.log('Власник присвоєний!');
        }
    }   
   
    this.showInfoCar = function() {
        console.log(`Інфо: \nМарка: ${this.brand} \nМодель: ${this.model}\nРік: ${this.year}\nРегестраційний номер: ${this.number}` );
        this.owner?this.owner.showInfoHuman(): console.log (`У цього авто власника немає`);
    }

}