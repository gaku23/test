const slider__menu = document.querySelector(".furniture")
const skip = document.querySelector(".skip__btn")
const passive = document.querySelectorAll(".passive")
const active = document.querySelector(".active")
const first = document.querySelector(".seat")
const second = document.querySelector(".desk")
const thrid = document.querySelector(".alisa")
const forth = document.querySelector(".modern")
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiper = document.querySelector('.swiper')
const swiperSlider = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: true, 
    slidesPerView: 1,
    spaceBetween: 10, 
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  });

function checkExam(array1, array2) {
  let count = 0;
   for (let i = 0; i < array1.length;i++){
     if (array1[i] === array2[i]){
       count += 4
     }
     else if (array1[i] != array2[i]){
       count -= 1
     }
  }
   if(count < 0) return 0
   else return count
 }

 console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
