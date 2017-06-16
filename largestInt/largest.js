
function largestOfFour(arr) {
  var max=0;
  var newArr=[];
  for (var i=0;i<arr.length;i++){
    for (var j=0;j<arr[i].length;j++){
      if (arr[i][j]>max){
        max=arr[i][j];
      }
    }newArr.push(max);max=0;
  }
  return newArr;
}
