function open_ford() {
    ford=window.open("ford.html", "display_ford",
      "width=400,height=300,status=no,toolbar=no,menubar=no");
  }

  function open_mazda() {
    mazda=window.open("mazda.html", "display_mazda",
      "width=400,height=300,status=no,toolbar=no,menubar=no");
  }

  function open_volvo() {
    volvo=window.open("volvo.html", "display_volvo",
      "width=400,height=300,status=no,toolbar=no,menubar=no");
  }

  function close_pict() {
    window.close();
  }

  function choiceOf(){
    if (confirm("Вы действительно хотите открыть окно?")) {
      volvo=window.open("volvo.html", "display_volvo",
            "width=400,height=300,status=no,toolbar=no,menubar=no");
   }
}

function acquaintance(){
    var YouName=prompt("Как тебя зовут?", "Напиши здесь свое имя.");
    alert("Привет "+YouName);
 }

 function startMessage(){
    alert("Начинайте!")
 }
 
