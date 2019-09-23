// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function Student(rollNumber, studentName){
    var rollNumber = rollNumber;
    var name = studentName;

    return {
      getRollNumber: function() {
        return rollNumber;
      },
      getStudentName: function() {
        return name;
      }
    };
    //this.getRollNumber = function() {
    //    return this.rollNumber;
    //}
    //this.getStudentName = function() {
    //    return this.name;
    //}
}

const student1 = new Student("1234", "Tim");

console.log(student1);
console.log(student1.getRollNumber());
console.log(student1.getStudentName());

console.log(student1.name);
console.log(student1.rollNumber);

