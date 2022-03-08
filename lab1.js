function func1(param){
    var n1= parseInt(param.t1.value);
    var n2=1*param.t2.value;
    var p=(n1*100)/(n1+n2);
    param.t3.value=p;
}