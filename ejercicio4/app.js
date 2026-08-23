// 1.1

const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
  console.log(event);
});

// 1.2

const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

// 1.3

const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});

