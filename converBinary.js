// const binaryArrayToNumber = arr => {
//     // your code
//     let array = []
//     let frishArray = arr.length - 1
//     console.log(frishArray)
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[frishArray])
//         // if(arr[frishArray - i] == 1){
//             count = (count * 2) + arr[i]
//         // }
//     }
//     return count
// };


const binaryArrayToNumber = arr => {
    // your code
    let count = 0
    for (let i = arr.length - 1; i >= 0; i--) {
       const element =  arr[i]
       console.log(i)
    //    if(arr[i] === 1){
        count += Math.pow(1,i);
         
    //    }
    }
    return count
};

// const binaryArrayToNumber = arr => {
//     // your code
//     //array recieved as argument
//     //reverse array to begin at first digit
//     //loop through array
//     //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
//     //add numbers to variable | return variable
    
//     arr.reverse();
//     var count = 0;
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === 1){
//             console.log(i)
//           count += Math.pow(2,i);
//         }
      
  
//     }
      
//       return count;
  
    
//   };


function bin2dec(binStr) {
    const lastIndex = binStr.length - 1;
    let total = BigInt(0);

    for (let i = 0; i < binStr.length; i++) {
        if (binStr[lastIndex - i] === '1') {
            total += (BigInt(2) ** BigInt(i));
        }
    }

    return total;
}

console.log(binaryArrayToNumber([0,0,0,1]));
console.log(binaryArrayToNumber([0,0,1,0]));
console.log(binaryArrayToNumber([1,1,1,1]));
console.log(binaryArrayToNumber([0,1,1,0]));
console.log(bin2dec([0,0,0,1]));