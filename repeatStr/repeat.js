function repeatStringNumTimes(str, num) {
  if (num>0){
    var splitted=[];
    for (var i=0;i<num;i++){
          splitted.push(str);
    }

    return splitted.join("");
  }
  return "";
}