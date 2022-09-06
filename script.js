  var ant = "s"
function calc(acao,valor){

  if(acao=="limpar"){
    document.getElementById("tela").value = ""
  } 
  if(acao == "num"){
        document.getElementById("tela").value += valor
        ant = "n"
  }
    
  if(acao == "cal" &&  document.getElementById("tela").value != "" && ant=="n"){

     document.getElementById("tela").value += valor
     ant = "s"
  }
  if(acao=="res" && ant=="n"){
    resultado =eval(document.getElementById("tela").value)
    console.log(eval(resultado))
    document.getElementById("tela").value = eval(resultado)

  }

  }


  
