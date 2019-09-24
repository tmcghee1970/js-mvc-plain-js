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

const student1 = new Student("1234", "Tim");

//console.log(student1);

//console.log(student1.getRollNumber());
//console.log(student1.getStudentName());
console.log(student1.rollNumber, student1.name);

student1.name = "Russell";
console.log(student1.rollNumber, student1.name);


//console.log(student1.name);
//console.log(student1.rollNumber);

