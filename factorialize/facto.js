function factorialize(num) {
  var facto=1;
  for (var i=1;i<(num+1);i++){
    facto=i*facto;
  }
return facto;
}

factorialize(5);