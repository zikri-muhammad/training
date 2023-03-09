// const finbace = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let arr1 = arr[i];
//         if (arr1 % 5 == 0 && arr1 % 3 == 0) {
//             console.log('ficebash');
//         } else if(arr1 % 5 == 0){
//             console.log('fice');
//         } else if(arr1 % 3 == 0){
//             console.log('bash');
//         }
//     }
// }

// finbace([2]);

// // fice
// // bash
// // 

// const sort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
        
//     }
// }

// console.log(sort([2,3,6,5,2,0,1] ));


// const polidrom  = (str) => {
//     const lower = str.toLowerCase()
//     console.log(lower);
//     const lengt = str.length
//     for (let i = 0; i < lengt / 2; i++) {
//         if (str[i] !== str[lengt - 1 - i]) {
//             return 'not polidrom'
//         }
//         return 'polidrom';
//     }
// }

// console.log(polidrom('malam'));
// // console.log(polidrom('katak'));
// // console.log(polidrom('Kasur ini rusak'));
// // console.log(polidrom('Kasur ini rusak'));
// console.log(polidrom('Never odd oreven'));




// * Kasur ini rusak
// * Kasur Nababan rusak
// * Katak
// * Never odd or even
// * Was it a rat i saw
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("Was it a rat i saw"));
   console.log(palindrome("Never odd or even"));