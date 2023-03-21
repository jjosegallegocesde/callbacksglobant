
Prueba de pull request

function almacenar(n1,n2,n3,n4,n5,callback){
    let numeros=Array(n1,n2,n3,n4,n5)
    callback(numeros)
}
almacenar (1,1,1,1,1,function(numeros){

    let contador=0
    numeros.forEach(function(numero){
        contador=contador+numero
    })
    console.log(`La sumatoria es: ${contador}`)
})