"use strict";
exports.__esModule = true;
// classical version
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
        this.city = this.city;
    }
    return User;
}());
// handy version
var UserHandy = /** @class */ (function () {
    function UserHandy(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
    }
    return UserHandy;
}());
var Venkat = new User('venkatramanbehera1@gmail.com', 'Venkat');
var VenkatHandy = new UserHandy('venkatramanbehera1@gmail.com', 'Venkat', '12df');
