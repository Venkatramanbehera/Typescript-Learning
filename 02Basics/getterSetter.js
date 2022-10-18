"use strict";
exports.__esModule = true;
var UserHandy = /** @class */ (function () {
    function UserHandy(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
    }
    Object.defineProperty(UserHandy.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return UserHandy;
}());
