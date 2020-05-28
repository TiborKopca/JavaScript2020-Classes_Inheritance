/* 
Obligatorio utilizar las clases a partir del ECMAScript 2015

Inventar un tipo de clase padre, que luego herede de dos tipos de clase hijo.
Con un mínimo de dos métodos para las clase hijos.

2020 @ Tibor Kopca
*/


//VARIABLES/CONSTANTS
const CURR_YEAR = 2020;

//OBJETOS
class Computer {
    constructor(model, mbBrand, year) {
        this.model = model;
        this.ram = 16; //GB
        this.hdd = 500; //GB
        this.mbBrand = mbBrand;  //manufacturer
        this.pwSource = true;
        this.year = year;
    }
    printParams() {                  //metodo para imprimir los atributos del objeto
        return console.log(
`Este ${this.constructor.name} es de marca ${this.mbBrand}, \n\
su nombre es ${this.model}, \n\
tiene memoria volatil RAM de ${this.ram}GB, \n\
capacidad en disco duro ${this.hdd}GB `);
    }
    setYear(build) {
        this.year = build;
        return console.log(`Escribiendo el ano de manufacturacion: ${this.year}.`)
    }

    static classInfo() {                     //STATIC METHOD
        return console.log("El ordenador en forma de caja metalica, en dentro hay componentes.");
    }
}

class PC extends Computer {          //HERENCIA
    constructor(model, mbBrand, monitor) {  // se invoca al super constructor, en este caso es Persona
        super(model, mbBrand);
        this.periphetals = true;
        this.monitor = monitor;
        this.ram;                       //copia atributo del padre = 16
        //El resto de atributos no modificados se sacan del objeto padre - Computer
    }
    printParams() {                  //metodo para imprimir los atributos del objeto
        return console.log(
`Este computer es de marca ${this.mbBrand},\n\
su nombre es ${this.model}, \n\
tiene memoria volatil RAM de ${this.ram}GB, \n\
capacidad en disco duro ${this.hdd}GB, \n\
y tiene un monitor de marca ${this.monitor}. `);
    }
    static classInfo(instance) {    //podemos pasar como parametro la instancia del objeto
        return console.log(`Tu PC con placa madre de marca ${instance.mbBrand} si que viene con el teclado y el raton.`)
    }
}

class GamePC extends PC {      //extendemos clase PC cual extiende la clase Computer
    constructor(model, mbBrand, monitor, graphic, sound) {
        super(model, mbBrand, monitor);
        this.ram = 32;          //sobreescribimos el atributo hererido
        this.graphic = graphic;
        this.sound = sound;
    }
    printParams() {                  //metodo para imprimir los atributos del objeto
        return console.log(
`Este ${this.constructor.name} es de marca ${this.mbBrand}, \n\
su nombre es ${this.model}, \n\
tiene mas RAM para gaming - de ${this.ram}GB, \n\
capacidad en disco duro ${this.hdd}GB, \n\
y sii que tiene una buena targeta grafika ${this.graphic}, \n\
tambien si no estas sordo, aprovechas el ${this.sound}.`);
        }
    setRam(numero){
        this.ram = numero;
        return console.log(`Has anadido mas memoria RAM: ${this.ram} GB.`)
    }
    // setYear(ano){     //compara con el ano actual y devuelve si esta viejo o no.
    //     this.year = ano;
    //     return console.log("El GamePC tiene anos: " + CURR_YEAR - this.year);
    // }
}

class Notebook extends Computer {
    constructor(model, mbBrand, year, weight) { //tenemos que pasar parametros como definido en el construtor de clase PC
        super(model, mbBrand, year);
        this.weight = weight;
    }
    getYear() {
        return console.log(`Este notebook fue manufacturado en el ano ${this.year}.`);
    }
    getWeight() {
        return console.log(`Este notebook pesa unos ligeros ${this.weight} kg.`);
    }
}

//INSTANCIAS
computer1 = new Computer("Star X", "Asus");
computer1.printParams();
computer1.setYear(2010);
Computer.classInfo();
pc1 = new PC("Cheapo", "Apel", "HP");
pc1.printParams();
PC.classInfo(pc1);  //pasamos como parametro nuestra instancia de clase PC
notebook1 = new Notebook("Chulo", "Lenovo", 2018, 0.4);
notebook1.printParams();        //porque extiende clase Computer, podemos acceder a clase de su padre
notebook1.getYear();
notebook1.getWeight();
gamePc1 = new GamePC("FooBar", "Razor", "NoName FullHD", "Nvidia 30000", "Headset Air");
gamePc1.printParams();
gamePc1.setRam(64);
// gamePc1.setYear(2019);

