class Estudiante{
    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
    }

    obtenerId(){
      return this.id;
    }

    obtenerNombre(){
      return this.nombre;
    }

}

export default Estudiante;