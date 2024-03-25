import '../style.css'

export interface Product {
    description: string;
    price: number;
}//creamos una interfaz

const phone: Product = {
    description: 'Nokia Ai',
    price: 150.0
}//creamos objeto

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0

}//creamos objeto

export interface TaxCalcOptions {
    tax: number
    products: Product[]//esto el objeto product con los otros objetos añadidos(tablet,phone)

}//interfaz creada para options dentro de la función TaxCalc


//function TaxCalc(options: TaxCalcOptions): [number,number]
 export function TaxCalc({ tax, products }: TaxCalcOptions): [number, number] {
    //const {tax,products} =  options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];

}//creamos la función de la calculo de impuesto en las cuales crea un objeto(options) y lo enlazamos a una nueva interfaz(TaxCalcOptions)

const shoppingCart = [phone, tablet];//metemos en una variable array los objetos



const [total, tax] = TaxCalc({
    products: shoppingCart,
    tax: 0.15,


})


console.log('Total', total);
console.log('Tax', tax);


// se puede exportar de esta forma cualquier interfaz: export {Product};


/*
OJO, ACUERDATE QUE SE PUEDE DESESTRUCTURAR EL OBJETO DE LA FORMA QUE HAY DEL PRICE en el products.foreach(ya que pilla la interfaz products directamente)
COMO TAMBIÉN DENTRO DE LA PROPIA FUNCIÓN SI ES NECESARIA,ENDEBE DE CREAR UNA NUEVA
*/