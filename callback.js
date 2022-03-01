function funcionPrincipal(callback){

    setTimeout(function(){
        console.log("soy la funcion principal")
        callback()
    },2000)
    
}

funcionPrincipal(function(){
    console.log("soy la segunda funcion")
})