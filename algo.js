let arr = [42, 98, 120, 9, 5, 6, 22, 17, 3, 50, 63, 441, 144];

//odd
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         console.log(arr[i]);
//     }
// }

// div
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3==0){
//         console.log(arr[i]);
//     }
// }

//square

// for (i = 0; i < arr.length; i++) {
//   if (Math.sqrt(arr[i]) % 1 == 0)
//     console.log(arr[i] + " is square root of " + Math.sqrt(arr[i]));
// }

//prime
for (let i=0; i<arr.length; i++) {
    if (arr[i] > 1) {
        let isPrime = true;
        for (let j=2; j<=Math.sqrt(arr[i]); j++) {
            if (arr[i]%j=== 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(arr[i]);
    }
}


//prime
arr=arr.filter((num)=>{
    for(var i=2; i<=Math.sqrt(num);i++){
            if(num % i===0) return false
        }
        return true
    });

    console.log(arr);





//--------------------------------------------------------------------

// let arr2=[6,4,2,3,5,20,21,7]
// for (let i= 0; i < arr2.length; i++) {
//     let a=(arr2[i]);
//     console.log(a)
//     for (let j = 0; j < arr2.length; j++) {
//         let b=(arr2[j])
//     //    console.log(b)
//        for (let k = 1; k < arr2.length; k++) {
//         let c=(arr2[k])
//         // console.log(c)
//        let d = b*c
//         if (d===a) {
//             console.log(b,c)
//             console.log(arr2.indexOf(b));
//             console.log(arr2.indexOf(c));
//        }
//     }

// }

// let arr = [42, 98, 120, 9, 5, 6, 22, 17, 3, 50, 63, 441, 144];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     let a=arr[i];
//     let b=arr[j];
//       if (a % b === 0 || b % a === 0) {
//         let factor = a % b === 0 ? a / b : b / a;
//         console.log(` ${factor}`);
//       }
//     }
//   }




//odd
//  const odd=arr.filter((num)=>num%2==1)
//  console.log(odd);

//even
//  const even= arr.filter((num)=>num%2===0)
//  console.log(even);

// let divBy=3
// const div= arr.filter((num)=>num%divBy===0)
//  console.log(div);






// let a=[10,20,15,30,40,45,90];
// x=5;

// for(i=0;i<a.length;i++){
//   c=a[i]+x;
//   // if(c=x+a[i]==a){
//   //   console.log(c);
//   // }
// if()

// }


// setTimeout(()=>{
//   console.log("I am 1st")
// },2000)

// console.log("I am 2nd")

// setTimeout(()=>{
//   console.log("I am 3rd")
// },4000)
