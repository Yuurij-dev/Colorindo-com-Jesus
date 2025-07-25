const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.classList.toggle('hidden');
}