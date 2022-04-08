'use strict';
// How to work with class
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to open the modal
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //show what was hidden
  btnsOpenModal[i].addEventListener('click', openModal);
//creating button to close window
btnCloseModal.addEventListener('click', closeModal);
//creating option to close everywhere
overlay.addEventListener('click', closeModal);

// Keyboard events = close with ESC
// Global event keydown(when we press our keyboard)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
