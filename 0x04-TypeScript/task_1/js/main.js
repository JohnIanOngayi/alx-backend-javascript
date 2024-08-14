var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ", ").concat(lastName);
};
var firstd = "Booyahh";
firstd.charAt(6);
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomework = function () {
            return "Currently working";
        };
        this.displayName = function () {
            return _this.firstName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
//TEST CODE
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var class_1 = new StudentClass("Johnny", "Class");
console.log(class_1.workOnHomework());
console.log(class_1.displayName());
