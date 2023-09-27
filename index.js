 //1
const Coche = {
    marca: " ",
    modelo: " ",
    matricula: " "
};

//2
const Casa = {
    codPostal: " ",
    calle: " ",
    portal: " ",
    piso: " "
};

//3
const FullStackDeveloper = {
    lenguajes: [],
    proyectos: []
  };
  
//4
  const Perro = {
    nombre: " ",
    raza: " ",
    color: " ",
    edad: 1,
    ladrar: function() {
      console.log('¡Guau! ¡Guau!');
    },
    popo: function() {
      return Math.random() * 3;
    }
  };
  
//5 
  
let marcaPortatil = Portatil.marca; 

//6

let marcaPortatil2 = Portatil['marca']; 

//7

let grupos = Concierto.grupos;

//8

let RGB = [Led.rojo, Led.verde, Led.azul];
 
//9

Portatil.modelo = "P345";

//10

Concierto.cartelera.push("Guns N' Roses");

//11
Concierto.fecha = new Date();

//12

Impresora.imprimiendo = {
  nombreArchivo: "documento.pdf",
  copias: 4,
  numPaginas: 5
}

//13
const Noticia = {
  titular: " ",
  cuerpo: " "
};

//14
const Persona = {
  nombre: " ",
  apellidos: " ",
  edad: 5
};

//15
const Avion = {
  numPasajeros: 100,
  despegar: function(){
    console.log("despegando");
  },
  volar: function(){
    console.log("llegando al destino");
  },
  aterrizar: function(){
    console.log("aterrizando");
  }
}
 //16
 const contenido = {
  nombre: ""
};

const contenido2 = {
  nombre: ""
};

const Paquete = {
  contenido: [contenido, contenido2]
};

//17
const Pais = {
  numHabitantes: 500,
  continente: "",
  gentilicio: ""
}

//18
const codError = O_Error.codigo;

//19
const integrantes = Grupo.integrantes;

//20
const nivelesTinta = Impresora.tinta;

//21
const pixeles = Pantalla.pixeles;

//22
const especificaciones = Movil['especificaciones'];

//23
Grupo.numIntegrantes = 5;

//24
Pantalla.dimensiones = "1920x1080";

//25-Dos maneras que se me ocurrio de hacer (una la comento para que no de error en los test)
//Led.encendido = !Led.encendido;

  if(Led.encendido === true){
    Led.encendido = false
  } else {
    Led.encendido = true
  }

//26
Movil.temperatura = "20º";