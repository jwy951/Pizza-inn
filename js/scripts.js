function small() {
    // this.size = "Small";
    myPizza.sizeCharge = 150.00;
    myPizza.crustCharge = 15.00;
    myPizza.toppingCharge = 10.00;
};

function medium() {
    // myPizza.size = "Medium";
    myPizza.sizeCharge = 200.00;
    myPizza.crustCharge = 20.00;
    myPizza.toppingCharge = 20.00;

};

function large() {
    // myPizza.size = "Large";
    myPizza.sizeCharge = 250.00;
    myPizza.crustCharge = 25.00;
    myPizza.toppingCharge = 30.00;

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
     else if (myPizza.size === "Medium") {
        document.getElementById("fruit-topping").innerHTML = "ksh20.00";
        document.getElementById("kale-topping").innerHTML = "ksh20.00";
        document.getElementById("pepperoni-topping").innerHTML = "ksh20.00";
        document.getElementById("spinach-topping").innerHTML = "ksh20.00";
        document.getElementById("tomato-topping").innerHTML = "ksh20.00";
        document.getElementById("cheese-topping").innerHTML = "ksh20.00";
    }

    else {
        document.getElementById("fruit-topping").innerHTML = "ksh10.00";
        document.getElementById("kale-topping").innerHTML = "ksh10.00";
        document.getElementById("pepperoni-topping").innerHTML = "ksh10.00";
        document.getElementById("spinach-topping").innerHTML = "ksh10.00";
        document.getElementById("tomato-topping").innerHTML = "ksh10.00";
        document.getElementById("cheese-topping").innerHTML = "ksh10.00";
    }
}

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = 0;
    this.sizeCharge = 0;
    this.toppingCharge = 0;
    this.crustCharge = 0;
}

var myPizza = new Pizza();

Pizza.prototype.totalCharge = function () {
    return myPizza.sizeCharge + myPizza.crustCharge + myPizza.toppingCharge + myPizza.delivery;
};
function newFinalPrice() {
    var price = myPizza.totalCharge()
    reset();
    console.log(myPizza.totalCharge());
    console.log(myPizza.size());
}

function reset() {
    document.getElementsByName("delivery").reset;
    document.getElementsByName("toppings").reset;
    document.getElementsByName("crust").reset;
    document.getElementsByName("size").reset;
    var del = document.getElementsByName("delivery");
    var top = document.getElementsByName("toppings");
    var crus = document.getElementsByName("crust");
    var size = document.getElementsByName("size");
    for (var i = 0; i < del.length; i++) {
        del[i].checked = false;
    }
    for (var i = 0; i < top.length; i++) {
        top[i].checked = false;
    }
    for (var i = 0; i < crus.length; i++) {
        crus[i].checked = false;
    }
    for (var i = 0; i < size.length; i++) {
        size[i].checked = false;
    }
};

function finalPrice() {
    document.getElementById("size-price").innerHTML = "ksh" + myPizza.sizeCharge;
    document.getElementById("crust-price").innerHTML = "ksh" + myPizza.crustCharge;
    document.getElementById("topping-price").innerHTML = "ksh" + myPizza.toppingCharge;
    document.getElementById("delivery-price").innerHTML = "ksh" + myPizza.delivery;
    document.getElementById("total-charge").innerHTML = "ksh" + myPizza.totalCharge();
};