import "../style.css"

const name: string = "Strider";//esto no hace falta explicarlo la vd

let hpPoints: number | 'FULL' = 95; //esto permite meter datos de una variable, eso quiere decir que puedes poner "FULL" es igual en 95 dentro de HpPoints, estatándolo como un "Tipo/Estado"

const isAlive: boolean = true; //literalmente un booleano no tiene más

hpPoints = 'FULL'//el como detecta el variable de tipo dentro de hpPoints

console.log ({

    name, hpPoints, isAlive
  })//esto es como muestra la info


export{}//y esto es para el tema de los imports en el main.ts