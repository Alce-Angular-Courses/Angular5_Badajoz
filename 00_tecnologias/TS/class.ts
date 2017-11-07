interface Autor {
    autor: string;
    pais: string;
    nacim: Date;
}

interface Editorial {
    nombre: string;
    lugar: string;
}

class Libro implements Autor {
    public autor: string;
    public pais;
    public nacim;
    private titulo: string;
    public editorial: Editorial;

    constructor (autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;

        this.editorial = {nombre: "", lugar: ""}
    }

    mostrarAutor () {
        console.log(this.autor) 
    }
}

class LibroTecnico extends Libro {
    public tema: string;

    constructor (autor, titulo, tema) {
        super(autor, titulo)
        this.tema = tema
    }

    mostrar() {console.log(this)}
}

let oLibro = new LibroTecnico("Pepe", "Angular", "Programacion")
// Imposible en TS oLibro.editorial = "Anaya";
oLibro.mostrar();