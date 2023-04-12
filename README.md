# salmonCookies

## notes

1. constructor functions
2. object constructors

function Student(name, pronouns){
  // "this" refers to the object that WILL BE created
  this.studentName = name;
  this.codeClass = 201;
  this.onLine = true;
  this.introduce = function(){
    console.log(`Hello my name is ${this.studentName}`);
  };
}

//create INSTANCES of Student
let juan = new Student('Juan', 'they, them');
let sarah = new Student('Sarah', 'she, her');
let maria = new Student('Maria', 'she, her');
let steve = new Student('Steve', 'he, him');

console.log(juan);
console.log(sarah);

juan.introduce();

let studentArray = [sarah, juan, maria, steve];

for (let i = 0; i < studentArray.length; i++){
  studentArray[i].introduce();
}

//prototype

Student.prototype.hairColor = 'black';

sara.haircolor = 'brown';
console.log(sarah);
console.log(juan);
