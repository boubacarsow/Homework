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
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies[8])

// favMovies.sort();
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift("Guardians of the Galaxy");
// favMovies.splice(16, 15, 'Avatar');

// for (let i = 0; i < favMovies.length; i++) {
//     if (favMovies[i] == 'Django Unchained') {
//         favMovies.splice();
//         favMovies[i] = "Avatar";
//    }
// }

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// const halfway = Math.ceil(favMovies.length / 2);
// const firstHalf = favMovies.slice(0, halfway)
// const secondHalf = favMovies.slice(halfway)

// console.log(firstHalf, secondHalf) // log sperated array results
// console.log(favMovies) // log full results

//example
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// console.log(beasts.indexOf('giraffe'));
// expected output: -1

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// //sort change the order of all element in the array to aphalbetical order
// favMovies.sort()
// console.log(favMovies)
// //Pop method, remove Volver
// favMovies.pop()
// console.log(favMovies)
// //Push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
// //reverse the array
// favMovies.reverse();
// console.log(favMovies)
// //shift method remove "Guardian of the galaxy"
// favMovies.shift();
// console.log(favMovies)
// //unshift push the element to the start of the array, you can still call unshift return the length of the array
// //splice()
// console.log(favMovies.findIndex(e =>  e === "Django Unchained"))//14
// favMovies.splice(14,1,"Avatar")
// console.log(favMovies)

// //console.log(animals.slice(2));

// // var half_length = Math.ceil(favMovies.length / 2);    

// // var RightSide = favMovies.slice(half_length,favMovies.length);

// // console.log(RightSide);

// //Where is Waldo

// // const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// //                     ["Lucinda", "Jacc", "Neff", "Snoop"],
// //                     ["Petunia", ["Baked Goods", "Waldo"]]];

// //                     //whereIsWaldo.splice(1, 0, 'Feb');
// //                     whereIsWaldo[0].slice(1,1);
// //                     // whereIsWaldo.slice((0,0),2);

// //                     whereIsWaldo.splice(1,2, "No one");

// //                     console.log(whereIsWaldo);

// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);
// //neff to no one
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
// //Where is waldo
// console.log(whereIsWaldo[2][1][1]);

// let kittyTalk = ["Love me, pet me! HSSSSSS!"] 
// for (let i = 1; i <= 20; i++ ){
//   if
 
//     console.log(`${kittyTalk} <--"Love me, pet me! HSSSSSS!"`)
//   }

////////////////////////////////
//FIND THE MEDIAN
////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// const findTheMedian = (nums) => {
//     //Order the values from low to high
//     const sorted = [...nums].sort((a,b) => a - b);
//     //Is our data set odd or even-numbered?
//     if(!(sorted.length % 2)){
//         //If the dataset is even:
//         //Calculate the two middle positions with the formulas (n/2) - 1 and (n/2) where n is the number of values in the dataset.
//         let n1 = sorted[(sorted.length / 2 )- 1], n2 = sorted[sorted.length / 2];
//         //Find the mean of the two middle values with the formula (n1 + n2) / 2
//         return (n1 + n2) / 2;
//     } else { 
//         //If the dataset is odd:
//         //Calculate the middle position with the formula n / 2 where n is the number of values in the dataset.
//         //Return the value in the middle position
//         return sorted[Math.floor(sorted.length / 2)];
//     }
// }

// const unitTest1 = [350, 800, 220, 500, 130];
// const unitTest2 = [350, 800, 220, 500, 130, 1150];

// console.log(`Test One: ${findTheMedian(unitTest1)}`);
// //expected output = 350
// console.log(`Test Two: ${findTheMedian(unitTest2)}`);
// //expected output = 425
// console.log(`Answer: ${findTheMedian(nums)}`);
// //expected output = 15;
// white_check_mark
// eyes
// raised_hands












