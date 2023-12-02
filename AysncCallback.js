// Async JS
// let pizza;
// function orderPizza(){
//     console.log(`Order Pizza`);
//     setTimeout(()=>{
//         pizza=`🍕`
//         console.log(`${pizza} is ready`);
//     },2000)
//     console.log(`Pizza was ordered`);
// }
// orderPizza();
// console.log(`call Qoli`);
// console.log(`Eat a ${pizza}`); 


//callback

function orderPizza(callback){
    setTimeout(()=>{
        const pizza=`🍕`;
        callback(pizza)
    },2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`);
}
orderPizza(pizzaReady)
console.log(`call Qoli`);

function thing1(){
// call pizza shop
}
function thing2(){
// order the pizza
}
function thing3(){
// Eat the pizza
}