// 1.1
const button = document.querySelector('.showme');
console.log(button);

// 1.2

const h1 = document.querySelector('h1');
console.log(h1);

// 1.3 

const Allp = document.querySelectorAll('p');
console.log(Allp);

// 1.4

const allPokemon = document.querySelectorAll('.pokemon');
for(let i = 0; i < allPokemon.length; i++){
    console.log(allPokemon[i]);
}

// 1.5 

const dataFunction = document.querySelectorAll('[data-function="testMe"]');

for(let i = 0; i < dataFunction.length; i++){
    console.log(dataFunction[i]);
}

// 1.6

console.log(dataFunction[2]);