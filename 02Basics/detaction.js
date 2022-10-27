"use strict";
exports.__esModule = true;
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id) {
        console.log("Please Provide Id");
        return;
    }
}
// type guard using typeof operator
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
