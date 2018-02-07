namespace Interfaces {

  // ------------------------------------------------------
  // Basic
  // ------------------------------------------------------
  interface Student {
    name: string;
    studentId: number;
  }

  const getName = (s: Student) => s.name;

  getName({ name: 'steve' }); // Missing `studentId`
  getName({ name: 'steve', studentId: 42  });

  // ------------------------------------------------------
  // Optional Properties
  // ------------------------------------------------------
  interface Employee {
    name: string;
    employeeId?: string; // Optional
  }

  const employee: Employee = {
    name: 'steve',
  };

  employee.employeeId.trim();

  // ------------------------------------------------------
  // ReadOnly Properties
  // ------------------------------------------------------

  interface Immutable {
    readonly name: string;
    readonly studentId: number;
  }

  const immutableStudent: Immutable = {
    name: 'steve',
    studentId: 42,
  };

  immutableStudent.studentId = 37;

  // ------------------------------------------------------
  // Nested ReadOnly Properties
  // ------------------------------------------------------

  interface ImmutableNested {
    readonly name: string;
    readonly employee: Employee;
  }

  const immutableNested: ImmutableNested = {
    name: 'steve',
    employee: {
      name: 'steve b',
    },
  };

  immutableNested.employee.name = 'not steve'; // Oh noes :(

}
