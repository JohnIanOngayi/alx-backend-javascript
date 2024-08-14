var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else if (typeof salary === "number") {
        return new Director();
    }
};
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
};
var teachClass = function (todayClass) {
    return "Teaching ".concat(todayClass);
};
//TEST CODE
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee(500));
console.log(createEmployee("r500"));
console.log(isDirector(createEmployee(1400)));
console.log(executeWork(createEmployee(1400)));
console.log(executeWork(createEmployee(400)));
console.log(teachClass("History"));
console.log(teachClass("Math"));
