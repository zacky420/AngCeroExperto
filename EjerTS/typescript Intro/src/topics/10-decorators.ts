function classDecorator<T extends { new(...args:any[]): {} }>(
//creo que lo que hace es extender el tipo genérico a un "objeto" en las cuales se crea con nombre ... con una especie de Argument:any[]
//al fin y al cabo los decoradores que utilizaremos serán directamente Externos
    constructor: T



){
return class extends constructor{
newProperty = "New Property";
hello = "override";

}

}








// se puede poner los decoradores de esta forma: @ClassDecorator
@classDecorator
export class SuperClass{

public  myProperty:string = 'Abc123';

    print(){
        console.log('Hola Mundo')
    }

}

console.log(SuperClass );


const myClass = new SuperClass();
console.log(myClass)