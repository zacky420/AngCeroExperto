import "../style.css";

const Skills: string[] = ["Bash", "Counter", "Healing"];//esto te explica rápidamente como hacer el tipado de un array

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;//esto significa que hometown es un atributo opcional, lo puedes meter cuando quieras
}//esto te explica básicamente como hacer interfaces, que es separar los tipados de los objetos

const Strider: Character = {//aquí se pone de tipo la interfaz para enlazarla
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};// esto es el objeto en las cuales luego enlazas con la interfaz (Interfaz = Tipado de Objeto)


Strider.hometown = "RivenDell";//Demostración de Hometown

console.table(Strider)// esto es otro modelo de console log que endebe de escupirte la info te lo hace en una tablita mu guapa


export {};