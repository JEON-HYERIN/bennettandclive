const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

// 새로고침 시 사용자 스크롤 위치 저장하지 않음
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

const introMotion = gsap.timeline({
  onStart: function () {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');

    bodyEl.style.overflow = 'hidden';
    videolEls.forEach(function (video, index) {
      video.pause();
      lenis.stop();
    })
  },
  onComplete: function () {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');
    const loading = document.querySelector('.loading');

    bodyEl.removeAttribute('style');
    videolEls.forEach(function (video, index) {
      video.play();
      lenis.start();
    })
    loading.style.display = 'none';
  }
});
introMotion
  .fromTo('.loading .marquee__text span', {
    yPercent: 110,
    x: -40
  }, {
    yPercent: 0,
    stargger: .3,
    duration: 1.5
  })
  .to('.loading__content:nth-child(1)', {
    yPercent: -130, y: -20, duration: .8,
  },'a')
  .to('.loading__content:nth-child(2)', {
    yPercent: 130, y: 20, duration: .8,
    onStart:function(){
      $('.header__logo').addClass('scale');
    },
    onComplete:function(){
      $('.header__logo').addClass('white');
    }
  }, "a")
  .to('.loading', {
    'background-color':'transparent',
  }, "a+=0.4")

  .to('.overlay', {
    delay:0.4,
    opacity: 0,
  },'b')
  .from('.global-nav__link', {
    opacity: 0,
    y: 10,
    stagger: .2,
    // ease: 'none'
  },'c')
  .to('.section-brand__list--left .section-brand__item:nth-child(1)', {
    scale: 1,
    duration: .8
  },'c')
  .to('.section-brand__list--right .section-brand__item', {
    scale: 1,
    duration: .8,
    stagger: .2,
  },'c')



let SECTIONS = gsap.utils.toArray(".section-brand");
videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-brand',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    snap: 1 / (SECTIONS.length -1),
    // snap: {
    //   x: 60, // x snaps to the closest increment of 20 (0, 20, 40, 60, etc.)
    // },
  }
})

videoTl.to('.section-brand__video:nth-child(1)',{
  height:0
},'a')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(1)',{
  scale:0
},'a')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+2)',{
  yPercent:-100
},'a')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(1)',{
  yPercent:-100,
},'a')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(2)',{
  scale:1,
  yPercent:-100,
},'a')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+3)',{
  yPercent:-100,
},'a')


videoTl.to('.section-brand__video:nth-child(2)',{
  height:0
},'b')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(2)',{
  scale:0
},'b')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+3)',{
  yPercent:-200
},'b')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(2)',{
  yPercent:-200,
},'b')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(3)',{
  scale:1,
  yPercent:-200,
},'b')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+4)',{
  yPercent:-200,
},'b')

videoTl.to('.section-brand__video:nth-child(3)',{
  height:0
},'c')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(3)',{
  scale:0
},'c')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+4)',{
  yPercent:-300
},'c')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(3)',{
  yPercent:-300,
},'c')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(4)',{
  scale:1,
  yPercent:-300,
},'c')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+5)',{
  yPercent:-300,
},'c')

videoTl.to('.section-brand__video:nth-child(4)',{
  height:0
},'d')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(4)',{
  scale:0
},'d')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+5)',{
  yPercent:-400
},'d')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(4)',{
  yPercent:-400,
},'d')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(5)',{
  scale:1,
  yPercent:-400,
},'d')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+6)',{
  yPercent:-400,
},'d')

videoTl.to('.section-brand__video:nth-child(5)',{
  height:0
},'e')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(5)',{
  scale:0
},'e')
videoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+6)',{
  yPercent:-500
},'e')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(5)',{
  yPercent:-500,
},'e')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(6)',{
  scale:1,
  yPercent:-500,
},'e')
videoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+7)',{
  yPercent:-500,
},'e')



// document.querySelectorAll('.section-brand__video').forEach((element, index) => {
//   tl.fromTo($('.section-brand__video').eq(index + 1), {
//     yPercent: 100,
//   }, {
//     yPercent: 0,
//     scrub: 3,
//     ease: 'none',
//     duration: 15,
//     onComplete: function () {
//       // $('.section-brand__video').eq(index + 1).addClass('is-visible').siblings().removeClass('is-visible');
//     }
//   })
// });

blendedMode();
$(window).on('scroll', function () {
  blendedMode();
})

function blendedMode() {
  const target = $('.section-about').offset().top;
  const scroll = $(window).scrollTop();
  const width = $(window).width();
  if ((scroll >= target) && (width >= 1024)) {
    $('.global-nav__panel').addClass('is-blended');
  } else {
    $('.global-nav__panel').removeClass('is-blended');
  }
}


$('.global-nav__menu').on('click', function () {
  const navMenuEl = document.querySelector('.global-nav__menu');
  const bodyEl = document.querySelector('body');
  const CLASSNAME = 'is-nav-open';

  if (window.innerWidth <= 1023) {
    bodyEl.classList.toggle(CLASSNAME);
    if (bodyEl.classList.contains(CLASSNAME)) {
      navMenuEl.setAttribute('aria-label', 'Close navigation');
    } else {
      navMenuEl.setAttribute('aria-label', 'Open navigation');
    }
  }
});

window.addEventListener('resize', function () {
  const navMenuEl = document.querySelector('.global-nav__menu');
  const bodyEl = document.querySelector('body');
  const CLASSNAME = 'is-nav-open';

  if (window.innerWidth >= 1024) {
    bodyEl.classList.remove(CLASSNAME);
    navMenuEl.setAttribute('aria-label', 'Open navigation');
  }
})

ScrollTrigger.create({
  trigger: '.section-brand',
  start: '100% center',
  end: 'bottom center',
  scrub: 0,
  // markers: true,
  onEnter: function () {
    $('.header__logo').removeClass('is-blended');
  },
  onLeaveBack: function () {
    $('.header__logo').removeClass('is-blended');
  },
  onLeave: function () {
    $('.header__logo').addClass('is-blended');
  }
})

// 지역별 시간 구하기
const getRealTime = () => {
  let currentHour = 0;
  let currentMinute = 0;
  const clocks = document.querySelectorAll('.clock');

  function getTime(diff) {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
    const time = diff * 60 * 60 * 1000;
    const current = new Date(utc + (time));

    currentHour = String(current.getHours()).padStart(2, '0');
    currentMinute = String(current.getMinutes()).padStart(2, '0');
  }
  setTimeout(() => {
    clocks.forEach(function (clock, index) {
      const hour = clock.querySelector('.clock__hour');
      const minute = clock.querySelector('.clock__minute');

      if (clock.dataset.zone === 'newyork') {
        getTime(-4);
        hour.textContent = currentHour;
        minute.textContent = currentMinute;
      }
      if (clock.dataset.zone === 'los-angeles') {
        getTime(-7);
        hour.textContent = currentHour;
        minute.textContent = currentMinute;
      }
      if (clock.dataset.zone === 'miami') {
        getTime(-4);
        hour.textContent = currentHour;
        minute.textContent = currentMinute;
      }
    })
    getRealTime();
  }, 6000);
}
getRealTime();

// let mm = gsap.matchMedia();
// mm.add("(min-width: 1024px)", () => {
//   const partners = document.querySelectorAll('.section-partner__column');
//   partners.forEach(function (el, index) {
//     if (el.dataset.direction === 'left') {
//       gsap.to(el, {
//         x: -100,
//         scrollTrigger: {
//           trigger: el,
//           start: 'top 50%',
//           end: 'bottom 50%',
//           stagger: .2,
//           scrub: 1,
//           ease: "power3.out",
//           // markers: true
//         }
//       })
//     }
//     if (el.dataset.direction === 'right') {
//       gsap.to(el, {
//         x: 100,
//         scrollTrigger: {
//           trigger: el,
//           start: 'top 50%',
//           end: 'bottom 50%',
//           stagger: .2,
//           scrub: 1,
//           ease: "power3.out",
//           // markers: true
//         }
//       })
//     }
//   });
// })


$('.section-partner__item').each(function(){
  abc = gsap.timeline({
    scrollTrigger: {
        trigger: $(this),
        start: 'top 50%',
        end: 'bottom 30%',
        scrub: 1,
        ease: "none",
        // markers: true
      }
  })
  abc.to($(this).find('.section-partner__column[data-direction="left"]'),{x:-100},'a')
  abc.to($(this).find('.section-partner__column[data-direction="right"]'),{x:100},'a')
  abc.to($(this).find('.section-partner__column[data-direction="left"]'),{x:0},'b')
  abc.to($(this).find('.section-partner__column[data-direction="right"]'),{x:0},'b')
  
})


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: 'footer',
    start: '-100% 50%',
    end: 'bottom bottom',
    scrub: 0,
    // duration: 4,
    // markers: true
  }
});
tl2
.set('.logo__icon',{
  transition: 'none'
})

  .to('.logo__icon', {
    y: '50vh',
    ease:"none"
  },'a')
  .to('.logo__icon svg', {
    y: '-50vh',
    ease:"none"
  },'a')
  // .to('.logo__icon svg', {
  //   yPercent: -50,
  //   ease:"none"
  // })
  .to('.logo__icon', {
    scale: 1,
    y: '90vh',
    x: 0,
    ease:"none",
    onStart: function() {
      // $('.header__logo').removeClass('scale');
    }
  })

// const serviceLists = document.querySelectorAll('.section-service__item');
// serviceLists.forEach(function(el, index) {
//   if(el.parentElement.classList.contains('section-service__list--left')) {
//     const text = el.querySelector('.section-service__text');
//     // gsap.to(text, {
//     //   // y: '-52vh',
//     //   scale: 1,
//     //   scrollTrigger: {
//     //     trigger: text,
//     //     start: 'top 60%',
//     //     end: 'bottom 60%',
//     //     scrub: 0,
//     //     stagger: .2,
//     //     duration: .5,
//     //     delay: el.dataset.delay,
//     //     markers: true
//     //   }
//     // })
//   }
//   if(el.parentElement.classList.contains('section-service__list--right')) {
//     const text = el.querySelector('.section-service__text');
//     gsap.to(text, {
//       scale: 0,
//       scrollTrigger: {
//         trigger: text,
//         start: 'top 60%',
//         end: 'bottom 60%',
//         scrub: 0,
//         stagger: .2,
//         duration: .5,
//         // markers: true
//       }
//     })
//   }
// });

// const serviceList = document.querySelectorAll('.section-service__list--right .section-service__item');
// serviceList.forEach(function(el, index) {
//   gsap.to(el, {
//     scale: 0,
//     scrollTrigger: {
//       trigger: el,
// 			start: '100% 60%',
// 			end: '200% 60%',
//       scrub: 0,
//       markers: true
//     }
//   })
// })

videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-service',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 1,
    duration: .1,
    onEnter: function() {
      $('.section-service__list').addClass('is-fixed');
    },
    onLeave: function() {
      $('.section-service__list').removeClass('is-fixed');
    },
    onLeaveBack: function() {
      $('.section-service__list').removeClass('is-fixed');
    },
    onEnterBack: function() {
      $('.section-service__list').addClass('is-fixed');
    },
  },
})

videoTl.to('.section-service__list--right .section-service__item:nth-child(1)',{
  scale:0,

},'a')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+2)',{
  yPercent:-100
},'a')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  scale: 1
},'a')


videoTl.to('.section-service__list--right .section-service__item:nth-child(2)',{
  scale:0
},'b')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+3)',{
  yPercent:-200
},'b')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  scale: 1
},'b')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -100,
},'b')


videoTl.to('.section-service__list--right .section-service__item:nth-child(3)',{
  scale:0
},'c')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+4)',{
  yPercent:-300
},'c')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  scale: 1,
},'c')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -100,
},'c')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -200,
},'c')


videoTl.to('.section-service__list--right .section-service__item:nth-child(4)',{
  scale:0
},'d')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+5)',{
  yPercent:-400
},'d')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  scale: 1,
},'d')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -100,
},'d')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -200,
},'d')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -300,
},'d')


videoTl.to('.section-service__list--right .section-service__item:nth-child(5)',{
  scale:0
},'e')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+6)',{
  yPercent:-500
},'e')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  scale: 1
},'e')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -100,
},'e')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -200,
},'e')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -300,
},'e')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -400,
},'e')

videoTl.to('.section-service__list--right .section-service__item:nth-child(6)',{
  scale:0
},'f')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+7)',{
  yPercent:-600
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  scale: 1
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -100,
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -200,
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -300,
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -400,
},'f')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -500,
},'f')

videoTl.to('.section-service__list--right .section-service__item:nth-child(7)',{
  scale:0
},'g')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+8)',{
  yPercent:-700
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  scale: 1
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -100,
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -200,
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -300,
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -400,
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -500,
},'g')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -600,
},'g')

videoTl.to('.section-service__list--right .section-service__item:nth-child(8)',{
  scale:0
},'h')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+9)',{
  yPercent:-800
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  scale: 1
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -100,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -200,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -300,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -400,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -500,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -600,
},'h')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -700,
},'h')

videoTl.to('.section-service__list--right .section-service__item:nth-child(9)',{
  scale:0
},'i')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+10)',{
  yPercent:-900
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(9)',{
  scale: 1
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  yPercent: -100,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -200,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -300,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -400,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -500,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -600,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -700,
},'i')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -800,
},'i')

videoTl.to('.section-service__list--right .section-service__item:nth-child(10)',{
  scale:0
},'j')
videoTl.to('.section-service__list--right .section-service__item:nth-child(n+11)',{
  yPercent:-1000
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(10)',{
  scale: 1
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(9)',{
  yPercent: -100,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  yPercent: -200,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -300,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -400,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -500,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -600,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -700,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -800,
},'j')
videoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -900
},'j')




gsap.fromTo('.section-about__headline .headline__row--flex .headline__word:nth-child(2)', {
  y: '45vh',
  }, {
    y: 0,
    scrollTrigger: {
      trigger: '.section-about',
      start: '-40% top',
      end: '50% top',
      scrub: 0,
      // markers: true
    }
});


checkTiny()
$(window).on('scroll resize', function() {
  checkTiny();
});

function checkTiny() {
  const scroll = $(window).scrollTop();
  
  if($(window).width() <= 1023) {
    if(scroll > 0) {
      $('.header__logo').addClass('is-tiny');
    } else {
      $('.header__logo').removeClass('is-tiny');
    }
  }
}