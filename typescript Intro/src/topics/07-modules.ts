import { Product, TaxCalc } from './06-function-destructuring';
//PARA EXPORTAR OBJETOS, tienes que ir al elemento en cuestión a exportar, y debes de ponerle export detrás, o al final de todo del código en el que quieres hacerlo export{(aquí dentro pones el objeto que quieres, SIN LAS PARÉNTESIS)}

const shoppingCart: Product[] = [
    {
        description: "Nokia malardo",
        price: 300,
    },

    {
        description: "IPHONE",
        price: 1500,

    }

];

const [total,tax]= TaxCalc({ //NO HACE FALTA EXPORTAR TAMBIÉN LA INTERFAZ, SOLO LOS OBJETOS Y FUNCIONES NECESARIAS
    products: shoppingCart,
    tax: 0.15




});

console.log("total", total)
console.log("tax",  tax)
