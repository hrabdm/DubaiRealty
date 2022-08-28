
 /* section latest-projects */
 let slider = document.querySelector('.latest-projects__slider');
 let slides = document.querySelectorAll('.slide');
 let slideInf = document.querySelector('.slider__slide-info');
 let dots = document.querySelectorAll('.dots__dot');
 let index = 0;
 
 slides.forEach((elem, indexElem) => {
     // клик по слайду
     elem.addEventListener('click', event => {
         index = indexElem;             
         for (slide of slides) {
             slide.classList.remove('active');
         }            
         slides[index].classList.add('active');     
     
         for (dot of dots) {
             dot.classList.remove('active');
         } 
         dots[index].classList.add('active');
         
         //присваиваем инфо-блоку заголовок выбраного слайда
         slideInf.children[0].innerHTML = slides[index].children[0].innerHTML;
 
         //добавляем инфо-блок к выбранному слайду
         setTimeout(() => {
             for (i = 0; i < slides.length; i++) {
                 slider.appendChild(slides[i]);
                 if (i == index) {
                     slider.appendChild(slideInf);
                 }
             }            
         }, 500);
     })
   });
  /* end */