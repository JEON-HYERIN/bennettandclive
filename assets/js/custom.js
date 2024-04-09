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
    lenis.stop();
    videolEls.forEach(function (video, index) {
      video.pause();
    })
  },
  onComplete: function () {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');
    const loading = document.querySelector('.loading');
    
    bodyEl.removeAttribute('style');
    lenis.start();
    videolEls.forEach(function (video, index) {
      video.play();
    })
    loading.style.display = 'none';
  }
});
introMotion
  .fromTo('.loading .marquee__text', {
    yPercent: 110,
    x: -80,
  }, {
    yPercent: 0,
    stargger: .2,
    duration: 1.1,
    delay: 0.2
  })

  .to('.loading__content:nth-child(1)', {
    yPercent: -130, y: -20, duration: 1,
  },'a+=1')
  .to('.loading__content:nth-child(2)', {
    yPercent: 130, y: 20, duration: 1,
    onUpdate:function(){
      $('.header__logo').addClass('scale');
    },
    onComplete:function(){
      $('.marquee__texts').css('animation-play-state', 'paused');
    }
  }, 'a+=0.8')

  .set('.header__logo', {
    opacity: 0,
    onComplete:function(){
      $('.header__logo').addClass('white');
    }
  }, 'b',)
  .to('.loading', {
    'background-color':'transparent',
  }, 'b')
  .set('.header__logo', {opacity: 1},'b')

  .from('.global-nav__link', {
    opacity: 0,
    y: 10,
    stagger: .2,
    onStart: function() {
      $('.global-nav__menu').addClass('is-visible');
    },
    onComplete: function() {
      $('.global-nav__link').removeAttr('style');
    }
  },'c')
  .to('.section-brand__list--left .section-brand__item:nth-child(1)', {
    scale: 1,
    'transform-origin': 'bottom left',
    duration: .8,
    onComplete: function() {
      const brandItem = document.querySelector('.section-brand__list--left .section-brand__item:nth-child(1)');

      brandItem.style.transformOrigin = '';
    }
  },'c')
  .to('.section-brand__list--right .section-brand__item', {
    scale: 1,
    duration: .8,
    stagger: .2,
  },'c')
  .to('.section-brand__overlay', {
    delay: 1,
    opacity: 0,
  },'c')

const brandSection = gsap.utils.toArray('.section-brand');
const brandVideoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-brand',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    snap: {
      snapTo: 'labels', // 타임라인에서 가장 가까운 라벨에 스냅
      duration: {min: 0.2, max: 1}, // 최소 0.2 최대 3초 동안
      delay: 0.1, // 스냅을 하기 전 0.2초동안 지연
      // ease: 'power1.inOut' // 변화속도
    }
  },
})

brandVideoTl.to('.section-brand__video:nth-child(1)',{
  height:0,
  onStart: function() {
    changeAbbreviation();
  }
},'a')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(1)',{
  scale:0
},'a')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+2)',{
  yPercent:-100
},'a')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(1)',{
  yPercent:-100,
},'a')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(2)',{
  scale:1,
  yPercent:-100,
},'a')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+3)',{
  yPercent:-100,
},'a')


brandVideoTl.to('.section-brand__video:nth-child(2)',{
  height:0
},'b')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(2)',{
  scale:0
},'b')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+3)',{
  yPercent:-200
},'b')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(2)',{
  yPercent:-200,
},'b')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(3)',{
  scale:1,
  yPercent:-200,
},'b')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+4)',{
  yPercent:-200,
},'b')

brandVideoTl.to('.section-brand__video:nth-child(3)',{
  height:0
},'c')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(3)',{
  scale:0
},'c')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+4)',{
  yPercent:-300
},'c')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(3)',{
  yPercent:-300,
},'c')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(4)',{
  scale:1,
  yPercent:-300,
},'c')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+5)',{
  yPercent:-300,
},'c')

brandVideoTl.to('.section-brand__video:nth-child(4)',{
  height:0
},'d')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(4)',{
  scale:0
},'d')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+5)',{
  yPercent:-400
},'d')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(4)',{
  yPercent:-400,
},'d')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(5)',{
  scale:1,
  yPercent:-400,
},'d')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+6)',{
  yPercent:-400,
},'d')

brandVideoTl.to('.section-brand__video:nth-child(5)',{
  height:0
},'e')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(5)',{
  scale:0
},'e')
brandVideoTl.to('.section-brand__list--right .section-brand__item:nth-child(n+6)',{
  yPercent:-500
},'e')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(5)',{
  yPercent:-500,
},'e')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(6)',{
  scale:1,
  yPercent:-500,
},'e')
brandVideoTl.to('.section-brand__list--left .section-brand__item:nth-child(n+7)',{
  yPercent:-500,
},'e')

// is-blended class toggle
blendedMode();
$(window).on('scroll', blendedMode);
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

// navigation open
$('.global-nav__menu').on('click', openNav);
window.addEventListener('resize', function () {
  const navMenuEl = document.querySelector('.global-nav__menu');
  const bodyEl = document.querySelector('body');
  const CLASSNAME = 'is-nav-open';
  
  if (window.innerWidth >= 1024) {
    openNav();
    bodyEl.classList.remove(CLASSNAME);
    bodyEl.removeAttribute('style');
    navMenuEl.setAttribute('aria-label', 'Open navigation');
    lenis.start();
  }
})
function openNav() {
  const navMenuEl = document.querySelector('.global-nav__menu');
  const bodyEl = document.querySelector('body');
  const CLASSNAME = 'is-nav-open';

  if (window.innerWidth <= 1023) {
    bodyEl.classList.toggle(CLASSNAME);
    if (bodyEl.classList.contains(CLASSNAME)) {
      bodyEl.style.overflow = 'hidden';
      lenis.stop();
      navMenuEl.setAttribute('aria-label', 'Close navigation');
    } else {
      bodyEl.removeAttribute('style');
      lenis.start();
      navMenuEl.setAttribute('aria-label', 'Open navigation');
    }
  } else {
    bodyEl.classList.remove(CLASSNAME);
    bodyEl.removeAttribute('style');
    lenis.start();
    navMenuEl.setAttribute('aria-label', 'Open navigation');
  }
}

// 지역별 시간 구하기
let currentHour = 0;
let currentMinute = 0;
const printTime = () => {
  function getTime(offset) {
    const current = new Date();
    const utc = current.getTime() + (current.getTimezoneOffset() * 60 * 1000);
    const diff = offset * 60 * 60 * 1000;
    const currentTime = new Date(utc + (diff));
  
    currentHour = String(currentTime.getHours()).padStart(2, '0');
    currentMinute = String(currentTime.getMinutes()).padStart(2, '0');
  }

  const clockEls = document.querySelectorAll('.clock');

  clockEls.forEach(function (clockEl, index) {
    const hour = clockEl.querySelector('.clock__hour');
    const minute = clockEl.querySelector('.clock__minute');

    if(clockEl.dataset.zone === 'new-york') {
      getTime(-4);
    }
    if(clockEl.dataset.zone === 'los-angeles') {
      getTime(-7);
    }
    if(clockEl.dataset.zone === 'miami') {
      getTime(-4);
    }

    hour.textContent = currentHour;
    minute.textContent = currentMinute;
  })
  setTimeout(() => {
    printTime();
  }, 60000);
}
printTime();

const serviceVideoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-service',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 2,
    duration: .1,
    ease: 'none',
    onEnter: function() {
      $('.section-service__list--right').addClass('is-fixed');
    },
    onLeaveBack: function() {
      $('.section-service__list--right').removeClass('is-fixed');
    },
    onEnterBack: function() {
      $('.section-service__list--right').addClass('is-fixed');
    },
  },
  onComplete: function() {
    $('.section-service__list--right').removeClass('is-fixed');
  }
})

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(1)',{
  scale:0,
},'a')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+2)',{
  yPercent:-100
},'a')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  scale: 1
},'a')


serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(2)',{
  scale:0
},'b')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+3)',{
  yPercent:-200
},'b')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  scale: 1
},'b')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -100,
},'b')


serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(3)',{
  scale:0
},'c')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+4)',{
  yPercent:-300
},'c')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  scale: 1,
},'c')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -100,
},'c')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -200,
},'c')


serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(4)',{
  scale:0
},'d')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+5)',{
  yPercent:-400
},'d')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  scale: 1,
},'d')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -100,
},'d')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -200,
},'d')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -300,
},'d')


serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(5)',{
  scale:0
},'e')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+6)',{
  yPercent:-500
},'e')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  scale: 1
},'e')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -100,
},'e')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -200,
},'e')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -300,
},'e')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -400,
},'e')

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(6)',{
  scale:0
},'f')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+7)',{
  yPercent:-600
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  scale: 1
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -100,
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -200,
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -300,
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -400,
},'f')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -500,
},'f')

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(7)',{
  scale:0
},'g')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+8)',{
  yPercent:-700
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  scale: 1
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -100,
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -200,
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -300,
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -400,
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -500,
},'g')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -600,
},'g')

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(8)',{
  scale:0
},'h')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+9)',{
  yPercent:-800
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  scale: 1
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -100,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -200,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -300,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -400,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -500,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -600,
},'h')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -700,
},'h')

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(9)',{
  scale:0
},'i')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+10)',{
  yPercent:-900
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(9)',{
  scale: 1
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  yPercent: -100,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -200,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -300,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -400,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -500,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -600,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -700,
},'i')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -800,
},'i')

serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(10)',{
  scale:0
},'j')
serviceVideoTl.to('.section-service__list--right .section-service__item:nth-child(n+11)',{
  yPercent:-1000
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(10)',{
  scale: 1
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(9)',{
  yPercent: -100,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(8)',{
  yPercent: -200,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(7)',{
  yPercent: -300,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(6)',{
  yPercent: -400,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(5)',{
  yPercent: -500,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(4)',{
  yPercent: -600,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(3)',{
  yPercent: -700,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(2)',{
  yPercent: -800,
},'j')
serviceVideoTl.to('.section-service__list--left .section-service__item:nth-child(1)',{
  yPercent: -900
},'j')

serviceVideoTl.to('.section-service__list--left',{
  y: '-52vh',
},'k')

let mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", () => {
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
})
mm.add("(min-width: 1024px)", () => {
  $('.section-partner__item').each(function() {
    logoTl = gsap.timeline({
      scrollTrigger: {
          trigger: $(this),
          start: 'top 50%',
          end: 'bottom 30%',
          scrub: 1,
          ease: "none",
          // markers: true
        }
    })
    logoTl.to($(this).find('.section-partner__column[data-direction="left"]'),{x:-100},'a')
    logoTl.to($(this).find('.section-partner__column[data-direction="right"]'),{x:100},'a')
    logoTl.to($(this).find('.section-partner__column[data-direction="left"]'),{x:0},'b')
    logoTl.to($(this).find('.section-partner__column[data-direction="right"]'),{x:0},'b')
  })
})
mm.add("(max-width: 767px)", () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-150% 50%',
      end: '30% 80%',
      scrub: 0,
      onEnter: function() {
        $('.header__logo').removeAttr('style');
      },
      onLeaveBack: function() {
        $('.header__logo').addClass('scale');
      },
      // markers: true
    }
  });
  tl2
  .set('.logo__icon',{
    transition: 'none',
  })
  .to('.logo__icon', {
    y: '50vh',
    ease:"none"
  },'a')
  .to('.logo__icon svg', {
    y: '-50vh',
    ease:"none",
  },'a')
  .to('.logo__icon', {
    scale: 1,
    y: '97.5vh',
    x: 0,
    ease:"none",
    onComplete: function() {
      $('.header__logo').removeClass('abbreviation');
    },
    onReverseComplete: function() {
      $('.header__logo').addClass('abbreviation');
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-230% 50%',
      end: '50% 90%',
      scrub: 0,
      onEnter: function() {
        $('.header__logo').removeAttr('style');
      },
      onLeaveBack: function() {
        $('.header__logo').removeAttr('style');
      }
      // markers: true
    }
  });
  tl2
  .set('.logo__icon',{
    transition: 'none',
  })
  .to('.logo__icon', {
    y: '50vh',
    ease:"none"
  },'a')
  .to('.logo__icon svg', {
    y: '-50vh',
    ease:"none",
  },'a')
  .to('.logo__icon', {
    scale: 1,
    y: '97.5vh',
    x: 0,
    ease:"none",
    onComplete: function() {
      $('.header__logo').removeClass('abbreviation');
    },
    onReverseComplete: function() {
      $('.header__logo').addClass('abbreviation');
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 1024px) and (max-width: 1400px)", () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-240% 60%',
      end: '60% 90%',
      scrub: 0,
      onEnter: function() {
        $('.header__logo').removeAttr('style');
      },
      onLeaveBack: function() {
        $('.header__logo').removeAttr('style');
      },
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
  .to('.logo__icon', {
    scale: 1,
    y: '96vh',
    x: 0,
    ease:"none",
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 1401px) and (max-width: 1700px)", () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-150% 50%',
      end: '60% 90%',
      scrub: 0,
      onEnter: function() {
        $('.header__logo').removeAttr('style');
      },
      onLeaveBack: function() {
        $('.header__logo').removeAttr('style');
      },
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
  .to('.logo__icon', {
    scale: 1,
    y: '94vh',
    x: 0,
    ease:"none",
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 1701px)", () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      start: '-100% 50%',
      end: 'bottom bottom',
      scrub: 0,
      onEnter: function() {
        $('.header__logo').removeAttr('style');
      },
      onLeaveBack: function() {
        $('.header__logo').removeAttr('style');
      },
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
  .to('.logo__icon', {
    scale: 1,
    y: '90vh',
    x: 0,
    ease:"none",
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})

// 태블릿 구간까지 로고 축약형으로 보여지기
changeAbbreviation();
$(window).on('resize', changeAbbreviation);
function changeAbbreviation() {
  const scroll = $(window).scrollTop();
  
  if($(window).width() <= 1023) {
    if(scroll > 0) {
      $('.header__logo').addClass('abbreviation');
    } else {
      $('.header__logo').removeClass('abbreviation');
    }
  }
}
