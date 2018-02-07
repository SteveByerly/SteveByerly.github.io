namespace Intersection {

  interface Person {
    firstName: string;
    lastName: string;
  }

  interface SchoolInfo {
    studentId: number;
  }

  type Student = Person & SchoolInfo;

  const studentSteve: Student = {
    firstName: 'steve',
    lastName: 'b',
    studentId: 42,
  };

  const getStudent = (person: Person, schoolInfo: SchoolInfo): Student => {
    const { firstName, lastName } = person;
    // do some work...
    return {
      firstName,
      lastName,
      // studentId: schoolInfo.studentId
    };
  }

  const getStudent2 = (person: Person, schoolInfo: SchoolInfo): Student => {
    return {
      ...person,
      ...schoolInfo,
    };
  }
}
