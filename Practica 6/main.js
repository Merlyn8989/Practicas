/*class SerVivo{
    constructor(){
    }

    alimentarse(){

    }
}

class Planta extends SerVivo{
    constructor(){
        super()
    }
    alimentarse(){
        console.log(" la planta se alimenta de la luz")
    }
}

class Animal extends SerVivo{

}

class AnimalCarnivoro extends Animal{
    constructor(){
        super()
    }

    alimentarse(){
        console.log("El animal carnivoro se alimenta de carne")
    }
}

const plantita = new Planta();
plantita.alimentarse();

const leon = new AnimalCarnivoro();
leon.alimentarse();
*/


class Vehículo{
    constructor(placa, marca, modelo){
        this.placa = placa
        this.marca=marca
        this.modelo=modelo
    }

    mostrarDatos(){
        return`El vehiculo marca${this.marca} ${this.modelo} con placa ${this.placa}`
    }
}

class Sedan extends Vehículo{
    constructor(placa, marca, modelo, puertas){
        super(placa, marca, modelo)
        this.puertas = puertas
    }

    mostrarDatos(){
        return `El vehiculo marca${this.marca} ${this.modelo} con placa ${this.placa} y cuenta con ${this.puertas} puertas`
    }
}

const toyotaC = new Sedan("P-4358023", "Toyota", "Corolla", "4");
toyotaC.mostrarDatos();