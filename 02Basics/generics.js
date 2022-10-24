"use strict";
exports.__esModule = true;
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// short hand property
function identityFour(val) {
    return val;
}
// it is same as any but it is locking the type as one only
identityThree("Chiku");
identityThree(true);
identityFour({ brand: 'as', type: 1 });
