// JavaScript Document

//creating an object template Person
class Person {
//creating a constructor for Person object with name, age, gender and interests objects.
  constructor(name, age, gender, classes) {
    //assigning the values of the objects specified to a person
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  //creating a method greeting which prints the value of the name concatenated with a string object in the console log
  greeting() {
    //printing the string in console log
    console.log(`Hi! I'm ${this.name}`);
  };

  //creating a method bye which prints the value of name concatenated with a string in the console log
  bye() {
    //printing the string in console log
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//instantiating the objects for class Person with name, age, gender and interests objects where interests object contains 3 more objects
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//creating a class teacher which extends the class Person which means it inherits the objects from Person class
class Teacher extends Person {
  //creating constructor which contains the name, lastm age, gender, interests, subject, grade objects
  constructor(name, last, age, gender, interests, subject, grade) {
    //accessing the name, age, gender, interests objects from the super class Person
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}