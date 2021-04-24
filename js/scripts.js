function small(size,crust, topping) {
    // this.size = "Small";
    this.sizeCharge = 150.00;
    this.crustCharge = 15.00;
    this.toppingCharge = 10.00;
};

function medium() {
    // myPizza.size = "Medium";
    this.sizeCharge = 200.00;
    this.crustCharge = 20.00;
    this.toppingCharge = 20.00;

};

function large() {
    // myPizza.size = "Large";
    this.sizeCharge = 250.00;
    this.crustCharge = 25.00;
    this.toppingCharge = 30.00;

};

// small.prototype.small = function() {
//   return this.sizeCharge  +"," +this.crustCharge + "," + this.toppingCharge ;
// }

function delivery() {

    myPizza.delivery = 110;
    prompt("Where would you like to have your pizza delivered. Enter Estate Name");
    alert("Your delivery fees would be ksh 110.00!")

};
function checkedToppings() {
    var checked = 0;
    if (document.getElementById("CheckDefaultA").checked) { checked++; }
    if (document.getElementById("CheckDefaultB").checked) { checked++; }
    if (document.getElementById("CheckDefaultC").checked) { checked++; }
    if (document.getElementById("CheckDefaultD").checked) { checked++; }
    if (document.getElementById("CheckDefaultE").checked) { checked++; }
    if (document.getElementById("CheckDefaultF").checked) { checked++; }
    myPizza.toppingCharge *= checked;
    console.log(myPizza.toppingCharge);
}

function crust() {
    console.log(myPizza.size);
    if (myPizza.size === "Large") {
        document.getElementById("thin-crust").innerHTML = "ksh" + 15.00;
        document.getElementById("hard-crust").innerHTML = "ksh" + 15.00;
        document.getElementById("thick-crust").innerHTML = "ksh" + 15.00;
        document.getElementById("italian-crust").innerHTML = "ksh" + 15.00;
    }
    else if (myPizza.size === "Medium") {
        document.getElementById("thin-crust").innerHTML = "ksh" + 20.00;
        document.getElementById("hard-crust").innerHTML = "ksh" + 20.00;
        document.getElementById("thick-crust").innerHTML = "ksh" + 20.00;
        document.getElementById("italian-crust").innerHTML = "ksh" + 20.00;
    }
    else {
        document.getElementById("thin-crust").innerHTML = "ksh" + 25.00;
        document.getElementById("hard-crust").innerHTML = "ksh" + 25.00;
        document.getElementById("thick-crust").innerHTML = "ksh" + 25.00;
        document.getElementById("italian-crust").innerHTML = "ksh" + 25.00;
    }
}

function toppings() {
    if (myPizza.size === "Large") {
        document.getElementById("fruit-topping").innerHTML = "ksh30.00";
        document.getElementById("kale-topping").innerHTML = "ksh30.00";
        document.getElementById("pepperoni-topping").innerHTML = "ksh3.00";
        document.getElementById("spinach-topping").innerHTML = "ksh30.00";
        document.getElementById("tomato-topping").innerHTML = "ksh30.00";
        document.getElementById("cheese-topping").innerHTML = "ksh30.00";
    }
    
}