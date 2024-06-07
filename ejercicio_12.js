class Vehiculos {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInformacion() {
        return `marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`;
    }
}
class Automoviles extends Vehiculos {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, color: ${this.color}, precio: ${this.precio}`;
    }
}
var newVehiculo = new Vehiculos("Toyota", "Corolla", 2024);
var newAutomovil = new Automoviles("Ford", "Focus", 2010, "Azul", 8000);

console.log("los datos del vehiculo creado son: ", newVehiculo);
console.log("los datos del automovil creado son: ", newAutomovil.obtenerInformacion);
//dos formas de visualizar diferentesg