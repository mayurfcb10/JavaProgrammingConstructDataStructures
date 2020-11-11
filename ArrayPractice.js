// Simple Array Declaration
let origDogs = ['BullDog', 'Beagle', 'Labrador'];
let cats = ['American Curl', 'Bengal'];
let birds = ['Falcons', 'ducks', 'flamingoes'];

// Array Copy Elements
let sliceDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

// Stack functions (LIFO) Push and Pop
let pushDog = dogs.push('Golden Retirever');
let popDog =  dogs.pop();
dogs[dogs.length] = 'Poodle';

// Add and remove from first
let addFirst = dogs.unshift('Golden Retriever');
let shiftDog = dogs.shift();

// Atomic Add and remove elements  (where how many to remove, element list)
dogs.splice(2, 1, "Pug", "Boxer");

// Array Function - Concat, Slice and Sort
let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs, ...cats, ...birds].toString;
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {
     console.log('Scan'+first+' '+second);
}
let joinAnimals = animals.join(' ');
let allAnimals = '';

for(let animal of animals) {
    allAnimals += animal + ' ';
}
console.log('Animals'+ allAnimals);
