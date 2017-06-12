
function palindrome(str) {
  var newStr=str.toLowerCase();
  var newStr2="";
  for (var i=0;i<newStr.length;i++){
    if (newStr[i]=="a" || newStr[i]=="b" || newStr[i]=="c" ||newStr[i]=="d" ||newStr[i]=="e"||newStr[i]=="f"||newStr[i]=="g"||newStr[i]=="h"||newStr[i]=="i"||newStr[i]=="j"||newStr[i]=="k"||newStr[i]=="l"||newStr[i]=="m"||newStr[i]=="n"||newStr[i]=="o"||newStr[i]=="o"||newStr[i]=="p"||newStr[i]=="q"||newStr[i]=="r"||newStr[i]=="s"||newStr[i]=="t"||newStr[i]=="u"||newStr[i]=="v"||newStr[i]=="w"||newStr[i]=="x"||newStr[i]=="y"||newStr[i]=="z"||newStr[i]==1)
        {newStr2+=newStr[i];}
        
  }var length=newStr2.length;
  for (var j=0;j<newStr2.length;j++){
    if (newStr2[j]===newStr2[length-1]){
      length-=1;}
      else return false;
  }
  return true;
}

