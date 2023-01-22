function myapp(){
let a,b;
a = 62;
b = 9;
document.write(a + b);


//document.write(" <br> "+"Congratulations you are eligible for next process.")
};

//export default myapp;

/*var x =10;

var x ="all the best";

document.write("<br>"+x);


const car=["pransu","amarpur","bhopal","gen"];

console.log(car);
let z=4;
z +=3;
let y=Math.pow(z,2);
console.log(y);
//fuction
var v=myFunction(3,6);
document.write("<br> "+v);
function myFunction(p,q){
return p*q;
};
function topran(somipathak){
return(5/9)*(somipathak-30);}
document.write("<br>"+topran(99));                                                                                                     
//local variable(variable is undefined outside the function)
function mypran(){
let som="janeman";
document.write("<br>"+typeof som+" "+som);}
mypran();
//object
const person={firstName:"pransu",lastName:"pathak",age:56};
document.write("<br>"+"Name is="+" "+person.firstName+" "+person.lastName)

const information = {
           name:"pransu pathak",
           city:"bhopal",
           pin:"4866661",
           adress:function() {
           return this.city + " " + this.pin + " " + this.name; 
          }
};

console.log(information.pin);


document.write("<br>"+information.adress());
//event

// mysomi toggles btw adding and removing the show class,which is used to hide and show the know more content
function mySomi(){
c=Date();
document.getElementById("somii").innerHTML=c;
}
                
//string
let text="fhjfrekfiiktoujotmntgjuirdt pransu pathak gitt5p4it9o5to5tnhi \"pran\" ooi9tktjiergutrtkoper";
let length=text.length;
let part=text.slice(6,18);
let pr="good morning".concat(" ","everyone")
let phHhq="to the company";
let phHht="pran pathak";

let pa=text.replace("pran","pathak");
document.write("<br>"+ length +"<br>");
document.write(text +"<br>"+ text.search("pransu")+"<br>"+text.includes("pathak")+"<br>")
document.write(pr+ "<br>")

let p="som";
let q=new String("som")
//templates literals;
let addi='welcome ${phHhq}, ${phHht}';
document.write(addi);
document.write(p==q);
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html = html+`<li>${x}</li>`;
}

html += `</ul>`;
document.write(html);
let  B=123.99;
 
document.write(B.toFixed(0)+"<br>");
document.write(B.valueOf(3));
//array
const cars=["BWD","SUZUKI","Volvo"];
cars[1]="saab";
console.log(cars);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let manna = "<h2> name of fruits </h2><ul>";
for (let i = 0; i < fLen; i++) {
  manna += "<li>" + fruits[i] + "</li>";
}
manna += "</ul>";

document.write("<br>"+manna);
let my="cars";
let soma= "<h2>cars</h2><ul>";
 
cars.forEach(mysom);
soma+="</ul>"
document.write("<br>"+soma);
function mysom(value){
soma+="<li>"+value+ "</li>"
}
const baby=new Array("somi","som","bitti","bebbo","buti","ranibeti");
const business=["social media","affiliate marketing","software startup","tea stak","online marketing"];
const concatnation=baby.concat(business,fruits);
baby.pop();
console.log(baby);
baby.push("janeman")
console.log(baby);
console.log(baby.shift());//return value shifted out
console.log(baby.unshift("kareji"));//aray length
baby.unshift("kareji");//adds new element
delete baby[0];
fruits.splice(2,5,"lemon","kiwi")
console.log(baby.sort());
console.log(fruits.sort());
console.log(concatnation.toString());
baby.push("janu");
console.log(baby);
//loop
let pransu ="";
for (let i=0;i<8;i++){
//if (i==3){break;}
if(i===6){continue;}//skip the step
pransu+="the no is"+i+"<br>";
}
//document.write(pransu);
let i=0;
while(i<10){
pransu+="<br>the no is"+i;
i++;}
document.write(pransu+"<br>");
do {
pransu+="<br>the no is"+i;
i++;}
while(i<16)
document.write("<br>"+pransu);


let txt="";
for(let x in baby){
txt+=baby[x]+" ";//proprties of object
}
console.log(txt);*/

let lang="javascript";
let pintu="";
for( let x of lang){
pintu+=x+"<br>";//iteration
}
document.write(pintu);

//object iteration (for..of)
//the iterator protocol defines how to produce a sequence of values from an object
const lettes = ['a','b','c','d'];
let text =" ";
for(let i of lettes){
  text += i +"<br>";
}
document.write(text)
console.log(text);


//home made iterable(it does not support for..of statement)
 const myHome =() =>{
  let n = 0;
  return{
    next:function(){//next() method must return an object with two properties value(next value),done(true or false)
      n += 10;
      return{value:n, done:false};//use true for iteration completed
    }
  };
 }
 // create iterable
 const n = myHome();
 n.next();//for add value to continue of sequence
 console.log(n.next().value);

 //Symbol.iterator is a function that return a next() function
 //now we can use for..of statement

myNumbers = {};//Create an object

//create iterable
myNumbers[Symbol.iterator] = function(){
  let n = 0;
  done = false;
  return{
    next(){
      n += 20;
      if(n === 100){done=true}
      return{value:n,done:done};
    }
  };
}
// array destructing
function getScore() {
  return ['10','20','30','40'];
}
let [w,x,y,z] =getScore();
console.log(w);
console.log(x);
console.log(y);
console.log(z);

//Object destructing
let person = {
  firstName: 'John',
  lastName: 'Doe'
};
let { firstName: fname, lastName: lname } = person;
//let { firstName, lastName, middleName} = person;//for 234,235
console.log();
//console.log(firstName);
//console.log(middleName)
console.log(lname);

//Rest parameter(...)
//Rest parameter must be last formal parameter
//All the arguments you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc., 
function fn(a,b,...arg){
  console.log("1",a);
  console.log("Arg",arg);
   
}
fn("10","20","30","40");

function myFun(...args){
  let total = 0;
  for(const x of args){
    total += x;
  };
  console.log("Args",args)
}
myFun(1,2,3,4,5,6,7);

//Spread oprrator
// spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set. 

const add = [10,20,30];
const result =[...add,40,50,60,70,];
console.log(result);

function compare(a,b){
  return a-b;
}
let Result = compare(...[1,2]);
console.log(Result);

// class
//1st way 
class Person {
  constructor(name) {
    this.name = name;
  }
  //getName() {
  //  return this.name;//return the value of name property
  //}
}
let John = new Person("john dev");
//let fullName = John.getName();
console.log(John.name);

//getter and setter 
class Car{
  constructor(name){
    this.setName(name);//call the setName() mrthod to initialize the name property
  }
  getName(){
    return this.name
  };
  setName(newName){
    newName = newName.trim();//removing the whitespace from both ends of newName
    if(newName === ''){
      throw 'The name is empty'
    }
    this.name = newName;
  }
}
let car = new Car('pransu pathak');
console.log(car.name);
car.setName('atul pathak');
console.log(car.getName());

//car.setName('');
console.log(car);


//using get and set keyword
class Folder{
  constructor(file){
    this.file = file;
  }
  get file(){
    return this._file;
  }
  set file(newFile){
    newFile = newFile.trim();//terminate charactors from strings
    if(newFile === ''){
      throw 'the folder is empty'

    }
    this._file = newFile;

  }
}

let folder = new Folder('pran.js')
let file = folder.file;
console.log(file);
folder.file = 'pransu.js';
console.log(folder.file);

function Message(amsg){//taking class expression as arg
  return new amsg();   // return instance of class
}
 let greeting = Message(class{
  sayhi(){
    console.log('hii')
  }
 });
 greeting.sayhi();


 let app = new class{
  constructor(name){
    this.name = name;
  }
  start(){
    console.log('strting the '+ this.name +'...');
  }
  }('awesome app')
  app.start();
//inheritance

class Animal{
  constructor(legs){
    this.legs = legs;
  }
  walk(){
    console.log('walking on ' + this.legs +' ..')
  }
}
class Bird extends Animal{
  constructor(legs){
    super(legs);
  }
  fly = () =>{
    console.log('flying');
  }
}
let bird = new Bird('parote')
bird.walk();
bird.fly();
//symbol() function
let firstName = Symbol("pransu");
let lastName = Symbol("pathak");
console.log(firstName);
console.log( typeof lastName);

let s = Symbol.for('s');//Symbol.for method searches for the Synbol with s key
let nameId = Symbol.for('s')
console.log(s === nameId);