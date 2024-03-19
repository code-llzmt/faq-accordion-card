
const accordionQuestions = document.querySelectorAll('.accordion-question');
const illustrationBox = document.querySelector('.illustration-box img');

console.log(illustrationBox)

accordionQuestions.forEach(question => {
    question.addEventListener('click', () => {

        // 03 close the open accordion before opening a new one (not strictly necessary)
        const openAccordion = document.querySelector('.accordion-question.show-answer')
        if(openAccordion && openAccordion !== question){
            openAccordion.classList.toggle('show-answer');
            openAccordion.nextElementSibling.style.maxHeight = 0;
        }

        // 01 rotate 180deg the icon-arrow-down
        question.classList.toggle('show-answer');

        // 02 show/hide the answer
        const accordionAnswer = question.nextElementSibling;
        if(question.classList.contains('show-answer')){
            accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + 'px';
        }else{
            accordionAnswer.style.maxHeight = 0;
        }

        if(question.classList.contains('show-answer')){
            illustrationBox.style.left = '-29%';
        }else{
            illustrationBox.style.left = '-20%';
        }

    });
});