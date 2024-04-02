class Materia {
    constructor(nombre, docente, estudiante, fechaInicio, fechaFin) {
      this.nombre = nombre;
      this.docente = docente;
      this.estudiante = estudiante;
      this.fechaInicio = fechaInicio;
      this.fechaFin= fechaFin;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerDocente() {
      return this.docente;
    }
  
    obtenerEstudiante(){
      return this.estudiante;
    }
    obtenerFechaInicio() {
      return this.fechaInicio;
    }

    obtenerFechaFin(){
      return this.fechaFin;
    }
  }
  
  export default Materia;
  