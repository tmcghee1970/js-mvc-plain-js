// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function Student(rollNumber, studentName){
    //private members
    let rollNumber = rollNumber;
    let name = studentName;

    //public properties
    Object.defineProperty(this, "rollNumber", {
      get: function() {
        return rollNumber;
      },
      set: function(value) {
        rollNumber = value;
      }
    });

    Object.defineProperty(this, "name", {
      get: function() {
        return name;
      }
      ,
      set: function(value) {
        if (!value)
         throw new Error("Invalid Name.");

        name = value;
      }
    });
}

function StudentView() {
  
  this.printStudentDetails = function(studentName, studentRollNumber) {
    console.log('Student: ');
    console.log(`Name: ${studentName}`);
    console.log(`Roll Number: ${studentRollNumber}`);
  };

}

const student1 = new Student("1234", "Tim");
const view = new StudentView();
view.printStudentDetails(student1.name, student1.rollNumber);

//console.log(student1);
//console.log(student1.getRollNumber());
//console.log(student1.getStudentName());
//console.log(student1.rollNumber, student1.name);
//student1.name = "Russell";
//console.log(student1.rollNumber, student1.name);
//console.log(student1.name);
//console.log(student1.rollNumber);

