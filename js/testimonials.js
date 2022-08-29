/* section testimonials */
let blockIn = document.querySelector('.testimonials__in');
let blockOut = document.querySelector('.testimonials__out');
 let articles = document.querySelectorAll('.article');
 let dots2 = document.querySelectorAll('.testimonials .dots__dot');
 let indexDot = 0;
let clickUp = 3;
let clickDown = 0;

//меняю порядок элементов в массиве, т.к. они в разных блоках
articles = [articles[0], articles[2], articles[3], articles[1]];

 articles.forEach((elem, indexElem) => {
     // клик по слайду
     elem.addEventListener('click', event => {

         //перемещение слайдов и точек вправо
         if (indexElem == clickUp) {
            articles = [articles[1], articles[2], articles[3], articles[0]];
            if (clickUp == 3) {
                clickUp = 0;
                clickDown = 1;
            } else {
                clickUp++;
                clickDown++;
            }
            if (indexDot < 2) {
                indexDot++;
            } else {
                indexDot = 0;
            }
         }

         //перемещение слайдов и точек влево
         if (indexElem == clickDown) {
            articles = [articles[3], articles[0], articles[1], articles[2]];
            if (clickDown == 0) {
                clickDown = 3;
                clickUp = 2;
            } else {
                clickDown--;
                clickUp--;
            }
            if (indexDot > 0) {
                indexDot--;
            } else {
                indexDot = 2;
            }
         }

         //удаляем класс точек
         for (dot2 of dots2) {
            dot2.classList.remove('active');
         }    
         //активная точка
         dots2[indexDot].classList.add('active');

         //двигаем блоки
         blockOut.appendChild(articles[0]);
         blockIn.appendChild(articles[1]);
         blockIn.appendChild(articles[2]);
         blockOut.appendChild(articles[3]);
         
         //удаляем класс слайдов   
         for (article of articles) {
            article.classList.remove('out');
        }            
        articles[0].classList.add('out'); 
        articles[3].classList.add('out'); 
     })
   });
  /* end */
