function iniciar(){
    console.log("estoy iniciando el programa")
}

function procesar(){

    setTimeout(function(){
        console.log("estamos procesando el programa")
    },3000)
    
}

function finalizar(){
    console.log("estamos finalizando el programa")
}

//llamando a mis funciones
iniciar()
procesar()
finalizar()