
function titleCase(str) {
  var splitted=str.split(" ");
  var newStr=[];
  var joinedStr="";
  for (var i=0;i<splitted.length;i++){
  newStr.push(splitted[i].charAt(0).toUpperCase()+splitted[i].slice(1).toLowerCase());
  joinedStr=newStr.join(" ");
  }
  return joinedStr;
}


