

//las clases son formas para crear moldes para instancias 
//si las propiedaes son públicas, se puede ver desde fuera de la clase(al mundo exterior) desde cualquier parte
//si es privada, solamente se puede utilizar la propiedad o método solamente dentro de esa clase
export class Person {
    // public name: string;
    // private address: string;


    //public address?: string;  se puede  meter también opcional a los atributos(los métodos se desconoce)

    constructor(
        public firstname: string,
        public lastname: string,
        private address: string = "No Address",) {

        // this.name = name;
        // this.address = address;
        //en este caso es para definir las propiedades  y/ métodos
    }


}

/*
se pueden extender las clases cuando necesitas heredar propiedades de una clase a otra
export class Hero extends Person {

constructor(
    public AlterEgo: string,
    public age: number,
    public realName: string,
){
 super(realName,"Nigeria")
    en el super es básicamente poder poner los atributos del padre como los quieras definir en el constructor hijo(en este caso quiero que sea igual al realName y que el address sea "Nigeria")
}


*/




//se pueden extender las clases cuando necesitas heredar propiedades de una clase a otra
export class Hero {

    constructor(

        public AlterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        //this.Person = new Person(realName);
        //en el super es básicamente poder poner los atributos del padre como los quieras definir en el constructor hijo(en este caso quiero que sea igual al realName y que el address sea "Nigeria")
    }


}



const tony = new Person("Tony"," Stark", "New York")//esta  es la clase person transformada en un objeto para utilizarla en la construcción del objeto ironman
const ironman = new Hero("IronMan", 45, 'Tony',tony);
//aquí simplemente defines un nuevo objeto creado a partír de la clase Hero, extendida de Person
//También se tiene en cuenta que la 
console.log(ironman)//se llama al objeto principal