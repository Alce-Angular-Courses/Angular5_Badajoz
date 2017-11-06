  
let aDatos = [ {precio: 23}, {precio : 45}, { precio: 65}]

aDatos.forEach(element => {
    let iva = 1.22
    let precioFinal = element.precio * iva
    console.log ( ` 
        El precio es
        ${precioFinal}
    `
    )

});