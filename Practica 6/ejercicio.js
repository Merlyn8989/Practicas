

class Cubo{
    constructor(nombre, textura, dimension, nombreImgen){
        this.nombre = nombre
        this.textura = textura
        this.dimension = dimension
        this.nombreImgen = nombreImgen
    }
    get ObtenerImagen(){
        return this.nombreImgen
    }

}

class diamante extends Cubo{

    mostrarDatos(){
        return `El bloque ${this.nombre} da un diamente`
    }
}

class carbon extends Cubo{
    mostrarDatos(){
        return `El bloque ${this.nombre} da un carbón`
    }
}

class madera extends Cubo{
    mostrarDatos(){
        return `El bloque ${this.nombre} da madera`
    }
}

class tierra extends Cubo{
   
    mostrarDatos(){
        return `El bloque ${this.nombre} da Tierra`
    }
}


const tierra1 = new tierra("tierra", "textura", 4, "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png")
const cuboTierra = document.getElementById("img1");

const diamante1 = new diamante("diamante", "textura", 4, "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png")
const cuboDiamante = document.getElementById("img2");

const carbon1 = new tierra("carbon", "textura", 4, "https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png")
const cuboCarbon = document.getElementById("img3");

const madera1 = new tierra("madera", "textura", 4, "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png")
const cuboMadera= document.getElementById("img4");


cuboTierra.addEventListener("click", ()=>{
    const imgCubo=document.getElementById("imgCubo");
    const texto = document.getElementById("texto")

    const mensaje = tierra1.mostrarDatos();
    const imgUrl = tierra1.ObtenerImagen
    imgCubo.setAttribute("src", imgUrl)

    texto.innerText = mensaje;
})

cuboDiamante.addEventListener("click", ()=>{
    const imgCubo=document.getElementById("imgCubo");
    const texto = document.getElementById("texto")

    const mensaje = diamante1.mostrarDatos();
    const imgUrl = diamante1.ObtenerImagen
    imgCubo.setAttribute("src", imgUrl)

    texto.innerText = mensaje;
})

cuboCarbon.addEventListener("click", ()=>{
    const imgCubo=document.getElementById("imgCubo");
    const texto = document.getElementById("texto")

    const mensaje = carbon1.mostrarDatos();
    const imgUrl = carbon1.ObtenerImagen
    imgCubo.setAttribute("src", imgUrl)

    texto.innerText = mensaje;
})

cuboMadera.addEventListener("click", ()=>{
    const imgCubo=document.getElementById("imgCubo");
    const texto = document.getElementById("texto")

    const mensaje = madera1.mostrarDatos();
    const imgUrl = madera1.ObtenerImagen
    imgCubo.setAttribute("src", imgUrl)

    texto.innerText = mensaje;
})