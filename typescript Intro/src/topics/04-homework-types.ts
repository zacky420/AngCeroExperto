import "../style.css";
/*
   ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}//aquí te muestra como hacer interfaces  a objetos que incluyen(o son) funciones directamente

interface Address {
    street: string
    country: string
    city: string
}




const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}//el objeto con la función en las cuales tiene dentro


const address = superHero.showAddress();
console.log(address);




export { };