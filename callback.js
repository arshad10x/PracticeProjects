// function orderPizza(type,name){
//     console.log('Pizza order');
//     console.log('Pizza is preparing');
//     setTimeout(()=>{
//         let msg=`your ${type} ${name} Pizza is ready`
//         console.log(`serve ${msg}`);
//     },3000)
// }

// orderPizza('Veg','Cheese Barbeque') 

// orderPizza('Veg','Cheese Barbeque',(msg)=>{
//     console.log(msg);
// });

// function orderPizza(type,name,callback){
//     console.log('Pizza order');
//     console.log('Pizza is preparing');
//     setTimeout(()=>{
//         let msg=`Your ${type} ${name} Pizza is ready`
//         callback(msg);
//     },3000)
// }




var array = ['a', 'c', 'b', 'e', 'd', 'f'];

var arr = [];
arr.push({ left: 0, right: array.length - 1 });

while (arr.length > 0) {
    var { left, right } = arr.pop();
    if (left >= right) {
        continue;
    }

    var middle = Math.floor((left + right) / 2);
    var leftStart = left;
    var leftEnd = middle;
    var rightStart = middle + 1;
    var rightEnd = right;

    var leftArray = [];
    var rightArray = [];

    for (var i = leftStart; i <= leftEnd; i++) {
        leftArray.push(array[i]);
    }

    for (var i = rightStart; i <= rightEnd; i++) {
        rightArray.push(array[i]);
    }

    var i = leftStart;
    var j = rightStart;

    for (var k = left; k <= right; k++) {
        if (i <= leftEnd && (j > rightEnd || leftArray[i - leftStart] <= rightArray[j - rightStart])) {
            array[k] = leftArray[i - leftStart];
            i++;
        } else {
            array[k] = rightArray[j - rightStart];
            j++;
        }
    }

    arr.push({ left: left, right: middle });
    arr.push({ left: middle + 1, right: right });
}

console.log(array);



const array = [4, 8, 7, 2, 11, 1, 3];

const n = array.length;
const tempArray = new Array(n);

for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
        const leftEnd = Math.min(leftStart + size - 1, n - 1);
        const rightStart = leftEnd + 1;
        const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

        let leftIndex = leftStart;
        let rightIndex = rightStart;
        let tempIndex = leftStart;

        while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
            if (array[leftIndex] <= array[rightIndex]) {
                tempArray[tempIndex++] = array[leftIndex++];
            } else {
                tempArray[tempIndex++] = array[rightIndex++];
            }
        }

        while (leftIndex <= leftEnd) {
            tempArray[tempIndex++] = array[leftIndex++];
        }

        while (rightIndex <= rightEnd) {
            tempArray[tempIndex++] = array[rightIndex++];
        }

        for (let i = leftStart; i <= rightEnd; i++) {
            array[i] = tempArray[i];
        }
    }
}

console.log(array);

