function recibirUsuario(nombre,edad,pass,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            edad:edad,
            password:pass
        }
        callback(usuario)
    },3000)   
}

recibirUsuario("james", 15,"123456",function(usuario){

    if(usuario.edad>=18){

        console.log(" bienvenido: "+usuario.nombre)


    }
    else{
        console.log(" no eres bienvenido: "+usuario.nombre)

    }

      
})



