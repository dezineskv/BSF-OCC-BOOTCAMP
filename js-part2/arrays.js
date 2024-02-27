// Creating an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

// accessing array elements
console.log('character 5: ', characters[4]);

// if don't know length of the array, get last element index -1 due to index
console.log('last character: ', characters[characters.length-1]);

characters.push('new entry');
console.log('push to the end: ', characters);

// modify array
characters.pop();
characters[0] = 'other new';
console.log('remove the last element: ', characters);

// Array Iteration using index
for(let i = 0; i < characters.length; i++) {
    console.log('Character ', i+1, characters[i]);
}
// for each runs a function on each element
characters.forEach(function(character) {
    console.log(character)
})

// indexOf
console.log(characters.indexOf('layla'));

/// includes is a boolean
console.log('Includes a value: ', characters.includes('sasuke'));

// join, into a string
console.log('Joined array: ', characters.join(' - '));

// slice returns a new array, doesn't modify existing one. end at the index after the wanted one, where to stop/not include.
let slicedArray = characters.slice(1, 4);
console.log('Sliced array: ', slicedArray)

// splice edits the Original array. store removed elements into a new variable. 2nd param is how many elements to remove.
let removedElements = characters.splice(0, 2);
console.log('Removed elements: ', removedElements);
console.log('Updated Array: ', characters);


