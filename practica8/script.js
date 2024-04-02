import Materia from './materia.js';
import Estudiante from './student.js'


const fechaInicio = new Date(2024, 3, 1); 
const fechaFin = new Date(2024, 3, 15); 

const estudiante = new Estudiante(23, "Merlyn Rajo");
const materia = new Materia("matemática", "Rosita", estudiante, fechaInicio, fechaFin);

console.log(`El estudiante ${estudiante.obtenerNombre()} está cursando ${materia.obtenerNombre()}`);

