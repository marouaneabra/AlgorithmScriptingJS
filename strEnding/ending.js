function confirmEnding(str, target) {
  if (target.length>1){
    var newStr=str.split(" ");
    var newStr2=str.split(" ");
    var mystring=newStr2[newStr2.length-1];
    if (target===newStr[newStr.length-1] || target===mystring.slice(2)){
      return true;
    }else {return false;}
  }
  if (target.length==1){
    //var newStr2=str.split(" ");
    if (target===str[str.length-1]){
      return true;
    }else {return false;}
  }
  var newStr2=str.split(" ");
  if (target.length==1 && newStr2.length==2){
    var myystring=newStr2[newStr2.length-1];
    //var newStr2=str.split(" ");
    if (target===myystring.slice(target.length-myystring.length)){
      return true;
    }else {return false;}}
}