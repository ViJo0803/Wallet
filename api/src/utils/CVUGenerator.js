  function generarNumeroCuenta(){
    const cifras = 15
    let stringNum = ''

    for(var i=0; i < cifras; i++){
        var x = Math.random() * 10 
        var x1 = Math.floor(x)
        stringNum = stringNum + x1
    }
    
    return stringNum
}

