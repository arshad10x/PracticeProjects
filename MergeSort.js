// function merge(left, right){
//     let arr=[]//break out of loops if array becomoe empty
//     while(left.length && right.length){
//         // pick smaller among smalest element of left and right of sub array
//         if(left[0]<right[0]){
//             arr.push(left.shift())
//         }else{
//             arr.push(right.shift())
//         }
//     }
//     // Concatenating the leftover elements
//     return [...arr,...left,...right]
// }
// function mergeSort(array) {
//     const half = array.length / 2
    
//     // Base case or terminating case
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)
//     return merge(mergeSort(left),mergeSort(array))
//   }

//   array = [4, 8, 7, 2, 11, 1, 3];
// console.log(mergeSort(array));


//resurcion

const merge=(left,right)=>{
    let leftIndx=0;
    let rightIndx=0;
    let resultArr=[]
    while(leftIndx<left.length && rightIndx<right.length){
        if(left[leftIndx]<right[rightIndx]){
            resultArr.push(left[leftIndx])
            leftIndx++
        }else{
            resultArr.push(right[rightIndx]);
            rightIndx++
        }
    }
    return resultArr.concat(left.slice(leftIndx)).concat(right.slice(rightIndx));
}
const sortMerge=(unsortedArr)=>{
    if(unsortedArr.length<=1){
        return unsortedArr
    }

    const mid=Math.floor(unsortedArr.length/2);
    
    const left=unsortedArr.slice(0,mid);
    const right=unsortedArr.slice(mid)

    // console.log(right);

    return merge(sortMerge(left),sortMerge(right));

}
const arr=['a','c','b','e','d','f'];
console.log(sortMerge(arr));

