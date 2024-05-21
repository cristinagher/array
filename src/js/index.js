// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumber = numbers => {
const randomNumber = Math.random() * numbers.length;
const exactNumber = Math.floor(randomNumber);
console.log(numbers[exactNumber]);}

getRandomNumber ([10, 22, 36, 47, 52]);


//Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.
//La suma de todos los números es:[suma]"
//"La media de todos los números es:[media]"
//"El mayor es [mayor] y el menor es [menor]"

const theCheetahGirls = numbers => {
    const totalNumbers = numbers[0] + numbers[1] + numbers [2];
    const averageNumbers = (numbers[0] + numbers[1] + numbers [2])/3;
    if (numbers[0]> numbers [1] && numbers[0] > numbers[2]) {
        console.log(`El mayor número es ${numbers[0]}`);
    } else (numbers[1]> numbers[0] && numbers[1]> numbers [2])
    console.log("La suma de todos los números es: . La media de todos los números es . El mayor es  ")
    }
    const getOperations = (numbers) => {
        const suma = numbers[0] + numbers[1] + numbers[2];
        console.log(`La suma de todos los números es ${suma}`);
        const media = suma / numbers.length;
        console.log(`La media de todos los númberos es ${media}`);
      };

//Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.
const aleatoryNumbers = (numbers) => {
    const getNumberRandom = Math.floor(Math.random() * 11);
    if (numbers.includes(getNumberRandom)) {
      console.log(
        `El array contiene ${getNumberRandom} y se encuentra en ${numbers.indexOf(
          getNumberRandom
        )}`
      );
    } else {
      console.log("El array no contiene este número");
    }
  };
  aleatoryNumbers([2, 7, 8, 3, 5]);
//Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
const emptyArray = (numbers) => {
    const getRandomNumberA = Math.floor(Math.random() * 101);
    const getRandomNumberB = Math.floor(Math.random() * 101);
    const getRandomNumberC = Math.floor(Math.random() * 101);
  
    if (numbers.length === 0) {
      numbers.push(getRandomNumberA, getRandomNumberB, getRandomNumberC);
      console.log(numbers);
    } else {
      console.log("mal");
    }
  };
  emptyArray([]);
//Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const queHartura = (numbers) => {
    const even = [];
    const odd = [];
    const getRandomNumber = Math.floor(Math.random() * 11);
    const positionA = numbers[0] * getRandomNumber;
    const positionB = numbers[1] * getRandomNumber;
    const positionC = numbers[2] * getRandomNumber;
    const positionD = numbers[3] * getRandomNumber;
    const positionE = numbers[4] * getRandomNumber;
    if (positionA % 2 === 0) {
      even.push(positionA);
    } else {odd.push(positionA)};

    if (positionB % 2 === 0) {
        even.push(positionB);
    } else  {odd.push(positionB)}
      
    if (positionC % 2 === 0) {
        even.push(positionC)
    } else {odd.push(positionC)}
    
    if (positionD % 2 === 0) {
        even.push(positionD);
    } else {odd.push(positionD)}
      
    if (positionE % 2 === 0) {
        even.push(positionE);
    } else {odd.push(positionE)};

    console.log(` ${even} son pares`);
    console.log(` ${odd} son impares`);
  };
  queHartura([5, 2, 7, 9, 4]);
//Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.
const pruebaDni = (numbers) => {
    const calculateNumber= numbers % 23;
    const letters= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    const calculateLetter= letters[calculateNumber];
    console.log (`${numbers}${calculateLetter}`);
};
 
pruebaDni (77871539);


//Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']
const letterNames = (words) => {
    const newArray=[]
    const palabraA = words [0];
    const palabraB= words [1];
    const palabraC= words [2];
    const firstLetterA= palabraA.charAt(0);
    const secondLetterA=palabraA.charAt(palabraA.length - 1);
    const firstLetterB= palabraB.charAt(0);
    const secondLetterB=palabraB.charAt(palabraB.length - 1);
    const firstLetterC= palabraC.charAt(0);
    const secondLetterC=palabraC.charAt(palabraC.length - 1);
    const newLetters=newArray.push(firstLetterA.toUpperCase(), secondLetterA.toUpperCase(),firstLetterB.toUpperCase(), secondLetterB.toUpperCase(), firstLetterC.toUpperCase(), secondLetterC.toUpperCase());
    console.log(newArray);

}
letterNames (['Pose', 'Restaurar', 'Ecológico'])
//Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const finalFunction = (numbers) => {
    const randomNumber= Math.floor(Math.random () * 6);
    const numberArray=numbers[randomNumber];
    console.log(numberArray);
    
}
finalFunction ([0, 1, 2, 3, 4]);
