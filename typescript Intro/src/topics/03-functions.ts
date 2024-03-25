import "../style.css";

// function addNumbers(a: number, b: number)  {
//   return a + b;
// } esto es una función hiperbásica de suma,aquí sale 3

// const addNumbersArrow = (a: number, b: number): string => {
//   return `${a + b}`;
// } esto lo que permite es transversar las funciones, de forma que puedes hacer el 1+2 y luego transformarlo en string, debería salir "3",también explica un poco las funciones flecha;

// function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
//   return firstNumber * base;
// } esto es una multiplicación en las cuales explica el parámetro opcional,en las cuales si no se añade segundo número saca 10

// const result: number = addNumbers(1, 2); la función de suma en variable
// const result2: string = addNumbersArrow(1, 2);la función flecha y la transversión en variable
// const multiplyResult: number = multiply(5); multiplicación con parámetro opcional en variable

// console.log({ result, result2, multiplyResult })//los resultados;

interface character {
    name: string;
    hp: number;
    showHp: () => void;
}//la interfaz  realizada para el objeto Character

const healCharacter = (character: character, amount: number) => {
    //esto es una función de curar al personaje, en las cuales te explica mejor la función flecha
    //como también del uso de las variables de los objetos dentro de las funciones(mientras se enlace el parámetro con susodicha interfaz)
    character.hp += amount;//esto simplemente suma a la cantidad puesta del personaje especificado una cantidad

}

const Strider: character = {
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`HP POINTS =  ${this.hp}`)//esto te muestra que puedes añadir funciones dentro de los objetos
    }//el objetito en cuestión
}



healCharacter(Strider, 10);//curación con el heal character, en este caso al objeto "Strider" 10 hp, debería de dar 60
healCharacter(Strider, 50);// se acumula la curación porque se ha vuelto a curar al pj anteriormente


Strider.showHp();//Aquí te muestra el uso de las funciones internas de un objeto, en este caso debería mostrarte la vida curada en total de los dos healcharacters, en este caso 110 de vida




export { };
