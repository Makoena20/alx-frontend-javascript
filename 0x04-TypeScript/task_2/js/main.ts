// main.ts

// Define the DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    return salary < 500 ? new Teacher() : new Director();
  }
  
  return new Director();
}

// Example usage
console.log(createEmployee(200)); // Should print: Teacher
console.log(createEmployee(1000)); // Should print: Director
console.log(createEmployee('$500')); // Should print: Director

