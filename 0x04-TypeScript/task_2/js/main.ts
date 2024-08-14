interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

interface EmployeeFunction {
  (salary: number | string): Director | Teacher;
}

const createEmployee: EmployeeFunction = (salary: number) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else if (typeof salary === "number") {
    return new Director();
  }
};

interface isDirectorInterface {
  (employee: Director | Teacher): boolean;
}

const isDirector: isDirectorInterface = (employee: Director | Teacher) => {
  return employee instanceof Director;
};

interface executeWorkInterface {
  (employee: DirectorInterface | TeacherInterface): string;
}

const executeWork: executeWorkInterface = (employee) => {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
};

type Subjects = "Math" | "History";

interface TodayClassInterface {
  (todayClass: Subjects): string;
}

const teachClass: TodayClassInterface = (todayClass: Subjects) => {
  return `Teaching ${todayClass}`;
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
