// variables

const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const modalContainer = document.querySelector('#modal-container')


// Event Listeners
openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';

});

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (element) => {

    if (element.target === modalContainer) {
       modalContainer.style.display = 'none'; 
    }
   
});