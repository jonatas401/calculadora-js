function acao (tipo,id){
         
    if(tipo == 'number'){
    var caracter = (document.getElementById('valor').value+=id)
    console.log(caracter)
    }
   if(id == '+' || id == '-' || id == '.' || id == '/'|| id == '*'){
    var caracter = (document.getElementById('valor').value+=id)

    }
    
     if(id == 'c'){
        document.getElementById('valor').value=""
    }
     if (id == '='){
     
        var caracter = eval(document.getElementById('valor').value)
        document.getElementById('valor').value=caracter
        console.log(document.getElementById('valor').value=caracter)
       
     if( caracter === undefined){
          document.getElementById('valor').value=''
       } 
    }
    
} 
function cor(id){
    document.getElementById('calc').style.background=id

}


