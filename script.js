//================ Optional if CSS animation handles auto-sliding ===============
let index = 0;

function showSlide() {
  const slides = document.querySelector('.slides');
  index = (index + 1) % 4; //================= 4 slides in total=============
  slides.style.transform = `translateX(-${index * 100}%)`;
}

//=============  Slide every 1.5 second=============
setInterval(showSlide, 1500);
