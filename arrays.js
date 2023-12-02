let colors=['red', 'green', 'blue'];

//lenght 
console.log(colors.length);


//2. Adding / removing elements
//push - add elm at end
console.log(colors.push('black'));
colors

// pop - remove end elm
console.log(colors.pop('black'));
colors

// unshift - add elm at start
console.log(colors.unshift('white'));
colors;

// shift - remove 1st elm
console.log(colors.shift('white'));
colors

// splice - del, ins, rep arr
console.log(colors.splice(1,0,'yellow'));
colors

//slice - copy element from array
console.log(colors.slice());


//3.Finding elements
//indexOf - locate elem in an arr
console.log(colors.indexOf('blue'));

//includes() - check if an elm is in an arr
console.log(colors.includes('pink'));
console.log(colors.includes('green'));

//find() - find an elm in an arr

let customers=[
    {
        name:'John',
        credit:100
    },
    {
        name:'Mark',
        credit:200
    },
    {
        name:'Doe',
        credit:300
    }
];
console.log(customers.find((e)=>e.credit>100));
console.log(customers.find(e=>e.credit>100));

const arr = [10, 20, 30, 10, 40, 20];
const value=arr.find((value)=>{
    return value>10;
})
console.log(value);


//findIndex() - find index of an elm in an arr
let rank=[1,5,7,8,10,7];
let indexs = rank.findIndex(rank=>rank==10);
console.log(indexs);

let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);


//3. Manipulating Arrays
//concat() - merge two arr in an elm
let a=[1,2,3,];
let b=[4,5,6];
console.log(a.concat(b));

//4.Flattening arrays
//flat() - flaten arrr to specified depth (default 1)

let arr1=[1,2,3,[4,5,6,[7,8,9]]]
let arr2=arr1.flat(2)
console.log(arr2);

//flatMap


//5.Arrays to Strings
//join() - concat all elm and return new string
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');
console.log(btnClass);

const title='Javascript array join example';
const url=title.split(' ').join('-').toLowerCase();
console.log(url);

//6. Advanced Operations
// Destructuring



//spread operator
const number=[1,2,3];
const [first,second,third]=number;
console.log(first);

const Array1=[1,2,3,4];
const Array2=[5,6,7];
const concat=[...Array1, ...Array2]
console.log(concat);

function add(a,b,c){
    return a+b+c;
}
const number1=[1,2,3];
const sum=add(...number1)
console.log(sum);

