/* SLIDER на jQuery*/

slider = $('.slider');
// фуккция показа большой картинки при клике на миниатюру
$('.slider .select__item').on('click', function (event) {
  let elem = $(this);
  $('.slider .select__item.active').removeClass('active');
  elem.addClass('active');
  $('.slider__img img').attr('src', elem.find('img').attr('src'));
})
// функция выбора и показа большой картинки при клике кнопка влево
function slidePrev() {
  let elem = $('.slider .select__item.active').prev();
  $('.slider .select__item.active').removeClass('active');
  if (!elem.length) {
    elem = $('.slider .select__item:last-child');
  }
  elem.addClass('active');
  $('.slider__img img').attr('src', elem.find('img').attr('src'));
}
$('#prev').on('click', slidePrev);
// функция выбора и показа большой картинки при клике кнопка вправо
function slideNext() {
  let elem = $('.slider .select__item.active').next();
  $('.slider .select__item.active').removeClass('active');
  if (!elem.length) {
    elem = $('.slider .select__item:first');
  }
  elem.addClass('active');
  $('.slider__img img').attr('src', elem.find('img').attr('src'));
}
$('#next').on('click', slideNext);

// setInterval(slideNext, 10000);

