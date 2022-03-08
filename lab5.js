function func1(param){

    var k1 = param.t1.value;
    var k2 = String(param.t2.value);
    if (k1 == /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i){ ///[AEIOUY]{1}[hjklmn]+/){ //&& k2 == /[aeiyuo0-9]+_{1}/) 
        alert('вы вошли');
    }
    else{
        alert('неправильно');
    }

}