function arrCompare(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  for(i=0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

var arr1 = [1,2,3]
var arr2 = [1,2,4]
arrCompare(arr1, arr2)
