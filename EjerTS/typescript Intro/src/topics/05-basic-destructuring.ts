import "../style.css";
/*
ESTO ES DESESTRUCTURACIÓN DE OBJETOS

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "SKibidi Toilet",
    details: {
        author: "ed Sheeran",
        year: 2015,
    },
};

const song = 'New Song';
const {song} = audioPlayer
const {
    song: anotherSong,
    songDuration: duration,
    details:{ author } desestructuración  dentro del objeto directamente
    details //metemos el objeto details, y luego hacer la desestructuración fuera del objeto
} = audioPlayer;
const { author } = details


const { details } = audioPlayer;
hacer la desestructuración fuera del objeto directamente



console.log("Author", author)
console.log ("Song:", song)
console.log("Song:", anotherSong);
console.log("Duration:", duration);
console.log("Author:", audioPlayer.details.author) esto es la forma larga de hacerlo;
*/

//ESTO ES DESESTRUCTURACIÓN DE ARRAYS



/*
const dbz: string[]= ['Goku','Vegeta','Trunks'];
desestructuración más basica, incluyendo en caso de no encontrar el valor(personaje)
console.log("Pj 3:", dbz[2] || "Personaje no Encontrado");
*/


/*const dbz: string[]= ['Goku','Vegeta','Trunks'];
const Trunks = dbz[3]||"Personaje No Encontrado";
//desestructuración básica fragmentada en variables
console.log("Pj 3:", Trunks);*/


/*const [p1,p2, trunks = 'Not Found']: string[]= ['Goku','Vegeta',];

console.error("personaje 3:", trunks);
Desestructuración más corta
*/












export { };
