const binarySearch = (arr, toSearch) => {
    let l = 0;
    let r = arr.length - 1;
    while(l <= r) {
      let mid = Math.floor((l+r)/2);
      console.log(mid);
      if(arr[mid] == toSearch)
        return mid;
      if(arr[mid] < toSearch) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 6));
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 5));