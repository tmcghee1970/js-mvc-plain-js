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

function StudentController(model, view){
    //private members
    let model = model;
    let view = view;

    //public properties
    Object.defineProperty(this, "rollNumber", {
      get: function() {
        return model.rollNumber;
      },
      set: function(value) {
        model.rollNumber = value;
      }
    });

    Object.defineProperty(this, "name", {
      get: function() {
        return model.name;
      }
      ,
      set: function(value) {
        if (!value)
         throw new Error("Invalid Name.");

        model.name = value;
      }
    });

    //public methods
    this.updateView = function() {
        view.printStudentDetails(model.name, model.rollNumber);
    }


}

const model = new Student("6789", "Carl Maynard");
const view = new StudentView();
const controller = new StudentController(model, view);
controller.updateView();
controller.name = "Jesus Vasquez";
controller.updateView();


//view.printStudentDetails(student1.name, student1.rollNumber);

//console.log(student1);
//console.log(student1.getRollNumber());
//console.log(student1.getStudentName());
//console.log(student1.rollNumber, student1.name);
//student1.name = "Russell";
//console.log(student1.rollNumber, student1.name);
//console.log(student1.name);
//console.log(student1.rollNumber);

