arr = [1, 1, 4, 4, 5, 5, 1, 1]

arr.sort() // nlogn

console.log(...arr)

let resultedArray = [];
let sum = arr[0];

for (let i = 0; i < arr.length; i++) {

   if(arr[i] === arr[i+1]){
    sum += arr[i+1];
   }else{
    resultedArray.push(sum);
    sum = arr[i+1];
   }
    
}
console.log(...resultedArray)

