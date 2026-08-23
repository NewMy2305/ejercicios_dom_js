// 2.1

const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// 2.2

const secondDiv = document.createElement('div');
const newP = document.createElement('p');

secondDiv.appendChild(newP);
document.body.appendChild(secondDiv); 

// 2.3

const divConSeisP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divConSeisP.appendChild(p);
}
document.body.appendChild(divConSeisP);

// 2.4

const pDinamica = document.createElement('p');
pDinamica.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamica);


// 2.5 

const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7

const nodosAEliminar = document.querySelectorAll('.fn-remove-me');
nodosAEliminar.forEach(nodo => nodo.remove());


// 2.8

const divs = document.querySelectorAll('div');
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';


document.body.insertBefore(pMedio, divs[1]);

// 2.9

const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
divsInsertHere.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});