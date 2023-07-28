 var elform = document.querySelector(".hero__form");
 var elinp = document.querySelector(".hero__userchange");
 var walk = 3.6;
 var biyckle = 20.1;
 var car = 70;
 var plain = 800;
 var rezultWalk = document.querySelector(".hero__list-desc-person");
 var rezultbiyckle = document.querySelector(".hero__list-desc-biyckle");
 var rezultcar = document.querySelector(".hero__list-desc-car");
 var rezultplain= document.querySelector(".hero__list-desc-plain");
 elform.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var elinpvaleu = elinp.value.trim();
  
  speedCalculator(elinpvaleu,walk,rezultWalk);
  speedCalculator(elinpvaleu,biyckle,rezultbiyckle);
  speedCalculator(elinpvaleu,car,rezultcar);
  speedCalculator(elinpvaleu,plain,rezultplain);
})

function speedCalculator(elinpvaleu, speed,element) {
  var time = elinpvaleu / speed;
  var hour = Math.trunc(time);
  var minute = Math.round((time-hour)*60);
  if (hour === 0) 
  {
    element.textContent = `${minute} minut`;
  }
  else if(minute === 0) {
    element.textContent= `${hour} soat`;
  }else {
    element.textContent = `${hour} soat ${minute} minut`;
  }
  
}