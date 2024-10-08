const accordian = document.querySelector('.accordian');

const icon = accordian.querySelector('.icon');
const answer = accordian.querySelector('.answer');

accordian.addEventListener('click', ()=>{
    icon.classList.toggle('active');
    answer.classList.toggle('active');
})