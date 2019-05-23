feedback "
JS foi derivado do java..." não e sim

q1
"2" === 2 //false comparou tambem o tipo

q2
declare variable
var int or Number //var

q3
disable form field //disabled or readyonly atributte

q4
initial request method in browser //get

q5
status 401 //unauthorized

q6
include a javscript script //script

q7
javascript foi derivado do java// não e sim

q8



// JavaScript code​​​​​​‌​​​​‌‌‌​‌‌‌​‌​​​​​​​​‌​​ below
// Use printErr(...) to debug your solution.

function change(money) {
    //var money = Number(prompt("Enter the amount of money you have"));
    var hundreds = 0;
    var fifty = 0;
    var twenty = 0;
    var ten = 0;
    var five = 0;
    var two = 0;
    var one = 0;
    var quarter = 0;
    var dime = 0;
    var nickel = 0; 
    var floor = 0;
    
    //processing
    

    if (money >= 10) {
      floor = Math.floor(money / 10);
       ten = floor;
       money -= (10 * floor);
    }else {
    
    }
    
    if (money >= 5) {
      floor = Math.floor(money / 5);
       five = floor;
       money -= (5 * floor);
    }else {
    
    }
    
    if (money >= 2) {
      floor = Math.floor(money / 2);
       two = floor;
       money -= (2 * floor);
    }else {
    
    }
    
    if (money >= 1) {
      floor = Math.floor(money / 1);
       one = floor;
       money = money - (1 * floor);
    }else {
    
    }
    
    
    //console.log("You need", hundreds, "100 dollar bills, ", fifty, "fifty dollar bills, ", twenty, "twenty dollar bills, ", ten, "ten dollar bills, ", five, "five dollar bills, ", two, "toonies, ", one, "loonies, ", quarter, "quarters, ", dime, "dimes, ", nickel, "nickels");

    return {
        two: two,
        five: five,
        ten: ten
    };
}
