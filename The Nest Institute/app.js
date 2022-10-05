const navBar = document.querySelectorAll(".nav-link");
    const Link = document.querySelectorAll("#nav");
    for (let x = 0; x < navBar.length; x++){
      navBar[x].addEventListener("click", (e) =>{
        const et = e.target;
        const activeLink = document.querySelector(".active");
        if (activeLink){
          activeLink.classList.remove("active");
        }
        et.classList.add("active");

        const navContent = document.querySelectorAll(".nav-content");
        for (let y = 0; y < navContent.length; y++){
          if (navContent[y].getAttribute("data-number") === navBar[x].getAttribute("data-number")){
            navContent[y].style.display = "block";
          } else {
            navContent[y].style.display = "none";
          }
        }
      })
    }


    window.addEventListener('mouseup',function(event){
        var navContent = document.querySelectorAll(".nav-content");
        var NavLink = this.document.querySelectorAll(".nav-link");
        for (let i = 0; i < navContent.length; i++){
          if(event.target != navContent[i] && event.target.parentNode != navContent[i] ){
            navContent[i].style.display = 'none';
        }
        }
        
  });  



  const questions = document.querySelectorAll(".btn2");

for (let j = 0; j < questions.length; j++){
    questions[j].addEventListener('click', (e) => {
        const et = e.target;
        const activeBtn = document.querySelector(".active");
        if (activeBtn){
            activeBtn.classList.remove("active");
        }
        
        const answers = document.querySelectorAll(".answer");
        for (let x = 0; x < answers.length; x++){
            if(answers[x].getAttribute("data-number") === questions[j].getAttribute("data-number")){
                answers[x].style.display = "block";
            } else {
                answers[x].style.display = "none";
            }
        }
    });
}



window.onscroll = function() {navScroll()};

function navScroll(){
    var anchor = document.getElementsByClassName("nav-link");
    const mainLogo = document.getElementById("main-logo");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").classList.add("fixed-top");
        for (i = 0; i <= anchor.length; i++){
            anchor[i].style.color = "#111";
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").classList.remove("fixed-top");
        for (i = 0; i <= anchor.length; i++){
            anchor[i].style.color = "#fff";
            anchor[i].style.opacity = "1 !important";
        }
    }
}


/****Swiperjs* */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
}); 


/**********************Gallery Animation********/

let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;


  					// Typewrite Script
            var TxtType = function(el, toRotate, period) {
              this.toRotate = toRotate;
              this.el = el;
              this.loopNum = 0;
              this.period = parseInt(period, 10) || 00;
              this.txt = '';
              this.tick();
              this.isDeleting = false;
          };
      
          TxtType.prototype.tick = function() {
              var i = this.loopNum % this.toRotate.length;
              var fullTxt = this.toRotate[i];
      
              if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
              } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
              }
      
              this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
              var that = this;
              var delta = 200 - Math.random() * 100;
      
              if (this.isDeleting) { delta /= 2; }
      
              if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
              } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 200;
              }
      
              setTimeout(function() {
              that.tick();
              }, delta);
          };
      
          window.onload = function() {
              var elements = document.getElementsByClassName('typewrite');
              for (var i=0; i<elements.length; i++) {
                  var toRotate = elements[i].getAttribute('data-type');
                  var period = elements[i].getAttribute('data-period');
                  if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                  }
              }
              // INJECT CSS
              var css = document.createElement("style");
              css.type = "text/css";
              css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
              document.body.appendChild(css);
          };