

export function whatsMyType<T>(argument: T): T {

    return argument;
//en este caso se le mete una variable genérica en las cuales permite "Improvisar" tipos y estados para evitar poner el Any
//en este caso los tipos genéricos permiten utilizar el mismo tipo de  argumento que has enviado(si has puesto un string, el argumento es string)
//estos tipos pueden cambiar de estado en cualquier nuevo objeto que creas con el type
}

let amIStrgin = whatsMyType<string>("Hola Mundo");
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
//estos objetos deben de ser capaces de detectar su propio tipo de estado




console.log(amIStrgin.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('__'));
//Aquí demuestra funcionamineto correcto de dichas variables genéricas