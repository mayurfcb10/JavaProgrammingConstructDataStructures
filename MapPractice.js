let keyString = 'a string';
let keyObj = {};
let keyFunc = function() {

}

// setting the values
let myMap = new Map();
myMap.set(keyString, "values associated with 'a string'");
myMap.set(keyObj, 'value assciated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

// getting the values
let size = myMap.size;
let varStr = myMap.get(keyString);
let isKeyExist = myMap.has('a string');

for(let [key, value] of myMap) 
    console.log('Loop1: '+key + ' = ' + value);

for(let [key, value] of myMap.entries()) 
    console.log('Loop2: '+key+' = '+value);

for(let key of myMap.keys()) 
    console.log('Loop3: '+key);

for( let value of myMap.values())
    console.log('Loop4: '+value);

// Merge two maps. The last repreated key wins.
// Spread Operator essentially converts the map into an array 
let first = new Map([[1, 'One'], [2, 'Two'], [3, 'Three']]);
let second = new Map([[1, 'Uno'], [2, 'Dos'], [3, 'Tres']]);
let merged = new Map([...first, ...second, [1, 'eins']]);

let hasKey = merged.has(1);
let delKey = merged.delete(1);

if(merged.has(1))
    console.log(merged.get(1));  // uno
console.log('Pos3: '+merged.get(3)); // tres
merged.clear();
console.log(merged.size());


