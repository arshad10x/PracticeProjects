// Javascript objects is a non-primitive data-type that allows to store multiple collections of data

//1st way
const person0 ={
    name:'John',
    age:20
};
console.log(person0);

//2nd way 
const person01 = {name:'John', age:20};
console.log(person01);



// 1. Using object literal
const person={
    name:'John',
    age:23,
    skills:['Html','Css','Js','React'],
    role:function(){
        console.log(`Frontend Developer`);
    },
    score:{
        nodeJs:40,
        MongoDb:50,
    },
};
Object.freeze(person)
person.name='Smith'
person.age=11
console.log(typeof person);

//access object values 
console.log(person.name);
console.log(person.skills[2]);
person.role();
console.log(person.score.nodeJs);
console.log(person.age);

// 2. By creating instance of Object directly

const person2= new Object({
    name:'Mark',
    age:23,
    skills:['Html','Css','Js','React'],
    role:function(){
        console.log(`Frontend Developer`);
    },
    score:{
        nodeJs:40,
        MongoDb:50,
    }
});
 
console.log(typeof person2);

//access object values 
console.log(person2.name);
person2.name='Joe'
console.log(person2);
console.log(person2.skills[2]);
person2.role();
console.log(person2.score.nodeJs);
console.log(person2.hasOwnProperty('score'));


// Create an object using Constructor Function

function Person3(){
    this.name='John',
    this.age=20,
    this.skills=['html','css','js','react'],
    this.role=()=>{
        console.log(`Frontend Developer`);
    },
    this.score={
        nodeJs:30,
        MongoDb:20
    }
}

const person3=new Person3();
console.log(typeof person3);

// access object value
console.log(person3.name);
console.log(person3.skills[0]);
person3.role();
console.log(person3.score.MongoDb);


// ways to access

console.log(person3.name); // dot notation
console.log(person3['name']); // bracket notation
console.log(person3.skills[0]); // Nested Objects
person3.role(); // object Methods


// Onjects in objects

const regUser={
    email:'user@gmail.com',
    fullName:{
        userFullName:{  
            firstName:'Arsh',
            lastName:'10x'
        }
    }
}
const regUser1=Object.assign({},regUser,regUser.fullName,regUser.fullName.userFullName)
console.log(regUser1);
console.log(regUser.fullName.userFullName.firstName);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}

// const obj3={obj1,obj2}
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//Spread opreator
const obj5={...obj1,...obj2}
console.log(obj5);

// console.log(Object.keys(regUser));
// console.log(Object.values(regUser));
// console.log(Object.entries(regUser));




