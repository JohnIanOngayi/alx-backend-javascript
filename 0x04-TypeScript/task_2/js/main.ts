/**
 * This file contains the interfaces and classes for different types of employees.
 * The interfaces define the methods that each employee should have.
 * The classes implement these interfaces and provide the functionality for each employee type.
 *
 * @author [Your Name] <[your.email@example.com]>
 * @version 1.0.0
 * @license [License Name]
 */

interface DirectorInterface {
  /**
   * Defines the behavior of working from home.
   *
   * @return {string} The message indicating that the director is working from home.
   */
  workFromHome(): string;

  /**
   * Defines the behavior of getting a coffee break.
   *
   * @return {string} The message indicating that the director is getting a coffee break.
   */
  getCoffeeBreak(): string;

  /**
   * Defines the behavior of working on director tasks.
   *
   * @return {string} The message indicating that the director is working on director tasks.
   */
  workDirectorTasks(): string;
}

/**
 * Interface for a teacher.
 */
interface TeacherInterface {
  /**
   * Defines the behavior of working from home.
   *
   * @return {string} The message indicating that the teacher is working from home.
   */
  workFromHome(): string;

  /**
   * Defines the behavior of getting a coffee break.
   *
   * @return {string} The message indicating that the teacher is getting a coffee break.
   */
  getCoffeeBreak(): string;

  /**
   * Defines the behavior of working on teacher tasks.
   *
   * @return {string} The message indicating that the teacher is working on teacher tasks.
   */
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
