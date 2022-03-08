function func1(param){
    var x= parseInt(param.t1.value);
    var n2=Math.log10(2+2*x);
    var n3=Math.tan(2*x-8)
    var n4=(6-x)
    var p=(n2+n3) * n4;
    param.t3.value=p;
}

