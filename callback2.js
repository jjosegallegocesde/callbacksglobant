//declaracion funcion principal
function sumar(numero1,numero2,callback){

    setTimeout(function(){
        let suma=numero1+numero2
        //llamar al callback
        callback(numero1,numero2,suma)
    },5000)

}

//llamado de la funcion principal
sumar(5,5,function(numero1,numero2,suma){ //cuerpo del callback
    //1. muestro la suma
    console.log(`la suma es: ${suma}`)
    //2. calcula la resta
    let resta=numero1-numero2
    //3. muestro la resta
    console.log(`la resta es: ${resta}`)

})