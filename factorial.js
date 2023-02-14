// const zeros = (n) => {
//     if(n === 0) return 0
//     let count = n
//     let result = 0
//     for (let i = n - 1; i > 0; i--) {
//         count *= i 
//         console.log(i);
//     }   
//     count.toString().split('').map(Number => {
//         if (Number == 0) {
//             result++
//         }
//     })
//     return count
// }

// const zeros = (n) => {
//     let count = 0;
//     for (let i = 5; n / i >= 1; i *= 5) {
//       count += Math.floor(n / i);
//     }
//     return count;
// }


function zeros (n) {

    let zs = 0;
    while(n>0){
      n = Math.floor(n/5);
      console.log(n);
      zs += n
    }
    return zs;
  }

// console.log(zeros(0));
console.log(zeros(6));
console.log(zeros(5));
console.log(zeros(30));