// 1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);


// 1.2 

const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();

// 1.3 

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
printHereDiv.appendChild(ulCars);

// 1.4

const countriesData = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');
container.classList.add('cards-container');

countriesData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;

  card.appendChild(h4);
  card.appendChild(img);
  container.appendChild(card);
});

document.body.appendChild(container);

// 1.5

const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.addEventListener('click', () => {
  const cards = container.querySelectorAll('.card');
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.appendChild(deleteLastBtn);

// 1.6 

countriesData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(h4);
  card.appendChild(img);
  card.appendChild(deleteBtn);
  container.appendChild(card);
});

