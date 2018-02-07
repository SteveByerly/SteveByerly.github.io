namespace Union {
  // ------------------------------------------------------
  // Definitions
  // ------------------------------------------------------
  interface Student {
    firstName: string;
    lastName: string;
    studentId?: number;
  }

  interface Employee {
    firstName: string;
    lastName: string;
    employeeId?: string;
  }

  const getName = (person: Student | Employee): string => {
    const { firstName, lastName } = person;
    return `${lastName}, ${firstName}`;
  };

  const getName2 = (person: Student | Employee): string => {
    const { firstName, lastName } = person;
    let name = `${lastName}, ${firstName}`;
    name += ` ${person.studentId}`; // `studentId` is not on `Employee`
    return name
  };

  // ------------------------------------------------------
  // Call with Student
  // ------------------------------------------------------

  const studentSteve: Student = {
    firstName: 'steve',
    lastName: 'b',
    studentId: 42,
  };

  getName(studentSteve);

  // ------------------------------------------------------
  // Call with Employee
  // ------------------------------------------------------
  const employeeSteve: Employee = {
    firstName: 'steve',
    lastName: 'b',
    employeeId: 'wasd',
  };

  getName(employeeSteve);

  // ------------------------------------------------------
  // Call with inferred
  // ------------------------------------------------------
  const otherSteve = {
    firstName: 'steve',
    lastName: 'b',
  };

  getName(otherSteve);

  // ------------------------------------------------------
  // Call with Union Type Alias
  // ------------------------------------------------------

  type Person = Student | Employee;

  const unionSteve: Person = {
    firstName: 'steve',
    lastName: 'b',
  };

  getName(unionSteve);
}
