
class CuentaBanco{
    constructor(nombre, numCuenta, cantidad){
        this.nombre = nombre;
        this.numCuenta = numCuenta;
        this.cantidad = cantidad;
    }

    retiro(cantidad){
        if(cantidad > this.cantidad){
            return "saldo insuficiente";
        }else{
            return this.cantidad = this.cantidad - cantidad;
        }
    }

    abono(cantidad){
        return this.cantidad += cantidad;
    }
}

const retiro = document.getElementById("retiro");
const cliente = new CuentaBanco("Leonardo", "004374902", 0);
retiro.addEventListener("click", ()=>{
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const response = document.getElementById("texto");
    response.innerText = cliente.retiro(cantidad);
})

const abono = document.getElementById("abono");

abono.addEventListener("click", ()=>{
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const response = document.getElementById("texto");
    response.innerText = cliente.abono(cantidad);
})