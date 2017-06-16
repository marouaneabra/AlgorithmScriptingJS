
function findLongestWord(str) {
  var splitted=str.split(" ");
  var max=0;
  for (var i in splitted){
    if (splitted[i].length>max){
      max=splitted[i].length;
    }
  }
  return max;
}


