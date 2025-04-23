// task_2/js/main.ts

// Interfaces
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

// Class implementations
class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// Employee creation function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

// Type guard for Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Work execution function
function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) 
    ? employee.workDirectorTasks() 
    : employee.workTeacherTasks();
}

// Subject teaching functionality
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Example test cases
console.log(executeWork(createEmployee(200)));  // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks
console.log(teachClass('Math'));               // Output: Teaching Math
console.log(teachClass('History'));            // Output: Teaching History
