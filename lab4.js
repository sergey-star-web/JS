
function func1(param){

    var k = String(param.t1.value);
    var k1 = k.split(' ');
    var str=""
    var str1=""
  for (var i = 0; i < k1.length; i++) {

    if (k1[i].length != 3  ){
       
        for(j = k1[i].length-1; j>=0; j--){
          str += k1[i][j]
        }
        str+=" ";
    }

    else{

      for(j = 0; j < k1[i].length; j++){
        str += k1[i][j]
      }
      str+=" ";
    }

  }

  s = str.split(' ')
  for (var i = s.length-1; i >=0; i--) {
    for(j = 0; j < s[i].length; j++){
        str1+= s[i][j];
    }
    str1+=" ";
  }

  //str.split(' ');
  param.t2.value = str1;

}