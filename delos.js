// Soal Nomor 1
const findSourCandies = (students, candies, first) => {
    let studentAsem = []
    for (let i = first; i < students; i++) {
        studentAsem.push(i)
    }
    return studentAsem[candies % students - 1]
}

console.log(findSourCandies(5,3,1));


// Soal Nomor dua 
const calculateFine = (returnedDate, expectedDate) => {
  const [returnedYear, returnedMonth, returnedDay] = returnedDate;
  const [expectedYear, expectedMonth, expectedDay] = expectedDate;
  
  if (returnedYear < expectedYear) {
      return 0;
  } else if (returnedYear === expectedYear) {
      if (returnedMonth <= expectedMonth) {
          if (returnedDay <= expectedDay) {
              return 0;
          } else {
              return 15 * (returnedDay - expectedDay);
          }
      } else {
          return 500 * (returnedMonth - expectedMonth);
      }
  } else {
      return 12000;
  }
}

console.log(calculateFine([2023, 8, 19],[2023, 6, 17]));


// Soal Nomor Tiga
const findTwoSum = function(nums, target){
  const numsMap = {}
  for (let i = 0; i < nums.length; i++) {
      const currentNumsVal = numsMap[nums[i]];
      // console.log(currentNumsVal);
      if (currentNumsVal >= 0) {
          return 'Yes'
      }else{
          const numTofind = target - nums[i]
          numsMap[numTofind] = i
      }
  }
  return 'No'
}

console.log(findTwoSum([1,3,4,5,6], 5));
console.log(findTwoSum([2, 0, 0, 0], 4));
console.log(findTwoSum([0,0,2,0], 5));
console.log(findTwoSum([1,3,4,5,6], 5));