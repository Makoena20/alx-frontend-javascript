/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}

