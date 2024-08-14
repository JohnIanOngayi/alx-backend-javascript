interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  //Adding any other attribute
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string,
) => {
  return `${firstName.charAt(0)}, ${lastName}`;
};
const firstd = "Booyahh";
firstd.charAt(6);

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassFunction {
  (): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework: StudentClassFunction = () => {
    return "Currently working";
  };

  displayName: StudentClassFunction = () => {
    return this.firstName;
  };
}

//TEST CODE
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher3);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

const class_1 = new StudentClass("Johnny", "Class");
console.log(class_1.workOnHomework());
console.log(class_1.displayName());
