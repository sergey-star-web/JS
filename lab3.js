function func1(param){

    var k= parseInt(param.t1.value);
    var arr1 = new Array(k);
    var arr2 = new Array(k);
  for (var i = 0; i < arr1.length; i++) {
    greet1 = 'Введите имя студента№'+(i+1); 
    arr1[i] = prompt( greet1); // Заполняем массив
    greet2 = 'Введите кол-во школьников'+(i+1); 
    arr2[i] = prompt( greet2); // Заполняем массив
  }

  document.getElementById('target-id1').innerHTML = JSON.stringify(arr1);
  document.getElementById('target-id2').innerHTML = JSON.stringify(arr2);
  var res=0;
  var minnum=10000;
  var maxnum=0;
  var indmax=0;
  var indmin=0;
  for (var i = 0; i < arr2.length; i++) {
      res = res+parseInt(arr2[i]);

      if(maxnum < parseInt(arr2[i])){
           maxnum = parseInt(arr2[i]);
           indmax = i;
      }

      if(minnum > parseInt(arr2[i])){
          minnum = parseInt(arr2[i]);
          indmin=i;
      }
  }

  param.t3.value = res;
  param.t4.value = arr1[indmax];
  param.t5.value = arr1[indmin];
  param.t6.value = maxnum;
  param.t7.value = minnum;

}
