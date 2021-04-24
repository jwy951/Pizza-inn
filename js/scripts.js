function small(size,crust, topping) {
    this.size = "Small";
    this.sizeCharge = 150.00;
    this.crustCharge = 15.00;
    this.toppingCharge = 10.00;
};

function medium() {
    myPizza.size = "Medium";
    myPizza.sizeCharge = 200.00;
    myPizza.crustCharge = 20.00;
    myPizza.toppingCharge = 20.00;

};

function large() {
    myPizza.size = "Large";
    myPizza.sizeCharge = 250.00;
    myPizza.crustCharge = 25.00;
    myPizza.toppingCharge = 30.00;

};

// small.prototype.small = function() {
//   return this.sizeCharge  +"," +this.crustCharge + "," + this.toppingCharge ;
// }


