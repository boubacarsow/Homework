// for ( let i = 1; i <= 100; i++) {
//     i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") 
//     : i % 3 == 0 ? console.log("Fizz") 
//     : i % 5 == 0 ? console.log("Buzz")
//     : console.log(i);
// };

// for (let i=1; i<=100; i++){
//     if(i%5==0 && i% 3==0 ){
//     console.log(`${i} FizzBuzz`)}
//     else if(i%5==0){
//     console.log(`${i} Buz`)}
//     else if(i%3==0){
//         console.log(`${i} Fizz`)}
// }

// var ninjaTurtle = ['Donatello','Leonardo','Raphael','Michaelangelo'];
// for (i=0; i<ninjaTurtle.length; i++){
//     console.log(ninjaTurtle[i].toUpperCase());
// }
// ninjaTurtle.forEach(word=>{
//     console.log(word.toUpperCase())
// })
// ninjaTurtle.map(word => {
//     console.log(word.toUpperCase())
// })
// var ninjaTurtle1 = ['Donatello','Leonardo','Raphael','Michaelangelo'];

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
//     const sharky = ["Sharky", "shark", 20, "Left Coast"];
//     const plantee = ["Plantee", "plant",  5000 , "Mordor"];
//     const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
//     const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//     plantee[2]++;
//     wolfy[3]="Gotham City";
//     dart[3]= "Upside Down & Hawkins";
//     wolfy[0]="Gameboy";
//     console.log(wolfy);
//     console.log(plantee);
//     console.log(dart);

// const ninjaTurtles=["Donatello","Leonardo","Raphael","Michaelangelo"];
//     for(let i of ninjaTurtles){
//         i=i.toUpperCase();
//         console.log(i);
//     }

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])

// favMovies.sort();
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift("Guardians of the Galaxy");
// favMovies.splice(16, 15, 'Avatar');

//console.log(animals.slice(2));

var half_length = Math.ceil(favMovies.length / 2);    

var RightSide = favMovies.slice(half_length,favMovies.length);

console.log(RightSide);


