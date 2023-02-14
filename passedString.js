// function solution(str, ending){
//     // TODO: complete
//     if(ending.trim() === '') return true
//     const firstString = str.slice(-ending.length)
//     console.log(firstString)
//     let result = false
//     for (let i = 0; i < ending.length; i++) {
//         const element = firstString;
//         const end = ending
//         console.log(end)
//         console.log(element)
//         if(element == end){
//             result = true
//         }
//     }
//     return result
// }
// function solution(str, ending){
//     if (typeof(str) != "string" || typeof(ending) != "string")
//       throw "wrong type";
//     if (ending.length>str.length)
//       return false;
//     return str.substr(str.length-ending.length, ending.length) == ending;
//   }

// console.log(solution('abcde', ''));
// console.log(solution('abcde', 'cde'));
// console.log(solution('abcde', 'abc'));


// function sumTwoSmallestNumbers(numbers) {  
//   //Code here
// //  let sum = 0
//  let num = numbers.sort((a, b) => {
//     return a - b
//  });
// //  console.log(num) 
// //  for (let i = 0; i < 2; i++) {
// //   const element = num[i];
// //   sum += element
// //  }
//  return num[0] + num[1]

// }

// console.log(sumTwoSmallestNumbers([1,33,4,5,6,7]))

// my solusion 
// function lovefunc(flower1, flower2){
//   // moment of truth
//   let genap = flower1 % 2 == 0
//   let ganjil = flower1 % 2 != 0
//   if(flower1 % 2 != 0 && flower2 % 2 == 0){
//     return true
//   }else if(flower2 % 2 != 0 && flower1 % 2 == 0){
//     return true
//   }else{
//     return false
//   }
// }

// function lovefunc(flower1, flower2){
//   // moment of truth
//   return (flower1 + flower2) % 2 != 0
// }



// console.log(lovefunc(1,4))
// console.log(lovefunc(2,2))
// console.log(lovefunc(0,1))
// console.log(lovefunc(0,0))

const lop = () => {
  let dayy = 'tuesday'
  let dayName = new Date().toLocaleString('en-us', {  weekday: 'long' }).toLocaleLowerCase()
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  console.log(dayName);
  let friday = {"friday" : {
    start_time : "00:002"
  }}

  console.log(friday.friday.start_time)
  return days.includes(dayName)
  
}

console.log(lop())