
function save(){
    var ad2= document.getElementById("add_to_me2");
    var elems2 = ad2.getElementsByTagName('p');
    var parent = document.getElementById("add_to_me");
    var elems = parent.getElementsByClassName('text');
    var num = elems2.length+1;
    if(elems.length>elems2.length){

    for(i=elems2.length;i<elems.length;i++){
        document.getElementById("add_to_me2").innerHTML += 
        "<p id=\"p"+num+"\" onclick=\"show();\">Абзац №"+num+"</p>";
        num=num+1;
    }
    }

    var val=1;
    for(i=0;i<elems.length;i++){
        if(elems[i].querySelector("input[type='text']").value!="Текст "+val+"")
        elems2[i].innerHTML = elems[i].querySelector("input[type='text']").value;
        val=val+1;
    }

    var d = document; 
    d.getElementById("div22").style.visibility="hidden";
}

function add(){
    var parent = document.getElementById("add_to_me");
    var elems = parent.getElementsByClassName('text');
    var num = elems.length+1;
    document.getElementById("add_to_me").innerHTML += 
        "<form name=\"form"+ num +"\"><p id=\"p"+num+"\"><div class=\"text\" id=\"p"+num+"\">Абзац №"+num+
        " <input type=\"text\" id=\"p"+num+"\" value=\"Текст "+num+"\">\
        <input type=\"button\" id=\"p"+num+"\" value=\"удалить\" onclick=\"del(this.id);\"></div></p></form>";

   }      

   function show(){
    var d = document; 
    d.getElementById("div22").style.visibility="visible";
   }

function del(clicked_id){
    for(i=1;i<4;i++){
    document.getElementById(clicked_id).remove();
}
}   
