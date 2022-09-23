"use strict";
// Unions --> '|'
exports.__esModule = true;
var score = 40;
score = 55;
score = '99';
var hitesh = { name: 'sdsds', id: 6566 };
hitesh = { username: 'hd', id: 6666 };
function getDbId(id) {
    console.log("DB id is ".concat(id));
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    id.toString().toUpperCase();
}
getDbId(1);
getDbId("2");
// Array
// number
var data = [1, 2, 3];
// string
var data2 = ["1", "2", "3"];
// both 
var data3 = ["1", "2", "3", 4];
// value 
var pi = 3.14;
// pi = 3.67; error
var seatAllotment;
seatAllotment = 'asile';
