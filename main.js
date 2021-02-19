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
   
    if(id == "!"){
        parar = 1
       let v =  document.getElementById('valor').value
       console.log(v)
       let res = 1
       for(i = 2; i<v; i++){
            res = res * i
       }
       document.getElementById('valor').value=res
    }

    
} 
function cor(id){
    document.getElementById('calc').style.background=id

}


