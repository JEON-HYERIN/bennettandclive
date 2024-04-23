// lenis
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

// intro
const introMotion = gsap.timeline({
  onStart: function() {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');

    bodyEl.style.overflow = 'hidden';
    lenis.stop();
    videolEls.forEach(function (video, index) {
      video.pause();
    })
  },
  onComplete: function() {
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
  .fromTo('.loading .marquee__text', {yPercent: 110, x: -80,}, {yPercent: 0, stargger: .2, duration: 1.1, delay: 0.2})
  .to('.loading__content:nth-child(1)', {yPercent: -130, y: -20, duration: 1}, 'a+=1')
  .to('.loading__content:nth-child(2)', {
    yPercent: 130,
    y: 20,
    duration: 1,
    onUpdate:function() {
      $('.header__logo').addClass('scale');
    },
    onComplete:function() {
      $('.marquee__texts').css('animation-play-state', 'paused');
    }
  }, 'a+=0.8')

  .set('.header__logo', {
    opacity: 0,
    onComplete:function() {
      $('.header__logo').addClass('white');
    }
  }, 'b')
  .to('.loading', {'background-color': 'transparent'}, 'b')
  .set('.header__logo', {opacity: 1}, 'b')

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
  }, 'c')
  .to('.section-brand__list--left .section-brand__item:nth-child(1)', {
    scale: 1,
    'transform-origin': 'bottom left',
    duration: .8,
    onComplete: function() {
      const brandItem = document.querySelector('.section-brand__list--left .section-brand__item:nth-child(1)');

      brandItem.style.transformOrigin = '';
    }
  },'c')
  .to('.section-brand__list--right .section-brand__item', {scale: 1, duration: .8, stagger: .2,}, 'c')
  .to('.section-brand__overlay', {delay: 1, opacity: 0}, 'c')

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

// navigation open
$('.global-nav__menu').on('click', openNav);
window.addEventListener('resize', function() {
  const navMenuEl = document.querySelector('.global-nav__menu');
  const bodyEl = document.querySelector('body');
  const CLASSNAME = 'is-nav-open';
  
  if (window.innerWidth >= 1024) {
    openNav();
    bodyEl.classList.remove(CLASSNAME);
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
      lenis.stop();
      navMenuEl.setAttribute('aria-label', 'Close navigation');
    } else {
      lenis.start();
      navMenuEl.setAttribute('aria-label', 'Open navigation');
    }
  } else {
    bodyEl.classList.remove(CLASSNAME);
    lenis.start();
    navMenuEl.setAttribute('aria-label', 'Open navigation');
  }
}

// brand
const brandVideoTl = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  scrollTrigger: {
    trigger: '.section-brand',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    snap: {
      snapTo: 'labels',
      duration: {min: 0.2, max: 1},
      delay: 0.1
    }
  },
})

const brandVideoEls = document.querySelectorAll('.section-brand__video');
  
brandVideoEls.forEach(function(videoEl, index) {
  const lastIndex = brandVideoEls.length - 1;

  if(index !== lastIndex) {
    brandVideoTl.to(videoEl, {
      height: 0,
      onStart: function() {
        if(index === 0) {
          changeAbbreviation();
        }
      },
      onReverseComplete: function() {
        if(index === 0) {
          changeAbbreviation();
        }
      }
    }, 
    `a${index}`)
  }
});

for(let i = 1; i < $('.section-brand__list--left .section-brand__item').length; i++) {
  brandVideoTl
  .to(`.section-brand__list--left .section-brand__item:nth-child(${i})`, {
    yPercent: `-${i}00`,
  }, `a${i - 1}`)
  .to(`.section-brand__list--left .section-brand__item:nth-child(${i + 1})`, {
    scale: 1
  }, `a${i - 1}`)
  .to(`.section-brand__list--left .section-brand__item:nth-child(n + ${i + 1})`, {
    yPercent: `-${i}00`,
  }, `a${i - 1}`)
}

for(let i = 1; i <= $('.section-brand__list--right .section-brand__item').length; i++) {
  brandVideoTl
  .to(`.section-brand__list--right .section-brand__item:nth-child(${i})`, {
    scale: 0,
  }, `a${i - 1}`)
  .to(`.section-brand__list--right .section-brand__item:nth-child(n + ${i + 1})`, {
    yPercent: `-${i}00`,
  }, `a${i - 1}`)
}

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
  onEnter: function() {
    $('.header__logo').removeClass('is-blended');
  },
  onLeaveBack: function() {
    $('.header__logo').removeClass('is-blended');
  },
  onLeave: function() {
    $('.header__logo').addClass('is-blended');
  }
})

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

// service section
const serviceVideoTl = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  scrollTrigger: {
    trigger: '.section-service',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    // markers: true
  }
})

for(let i = 1; i <= $('.section-service__list--left .section-service__item').length; i++) {
  serviceVideoTl.to(`.section-service__list--left .section-service__item:nth-child(${i})`, {
    scale: 1
  },`a${i}`)

  for(let j = i - 1; j > 0; j--) {
    serviceVideoTl.to(`.section-service__list--left .section-service__item:nth-child(${i - j})`, {
      yPercent: `-${j}00`,
    },`a${i}`)
  }
}

for(let i = 1; i <= $('.section-service__list--right .section-service__item').length; i++) {
  serviceVideoTl
  .to(`.section-service__list--right .section-service__item:nth-child(${i})`, {
    scale: 0,
  },`a${i}`)
  .to(`.section-service__list--right .section-service__item:nth-child(n + ${i + 1})`, {
    yPercent: `-${i}00`
  },`a${i}`)
}

let mm = gsap.matchMedia();

// about section
mm.add("(min-width: 1024px)", () => {
  gsap.from('.section-about__headline .headline__row--flex .headline__word:nth-child(2)', {
    y: '45vh',
    scrollTrigger: {
      trigger: '.section-about__headline',
      start: '0% 75%',
      endTrigger: '.section-about__content',
      scrub: 1,
      // end: '75% 20%',
      // markers: true
    }
  });
})

// partner section
mm.add("(min-width: 1024px)", () => {
  $('.section-partner__item').each(function() {
    logoTl = gsap.timeline({
      scrollTrigger: {
          trigger: $(this),
          start: 'top 50%',
          end: 'bottom 30%',
          scrub: 1,
          ease:  'none',
          // markers: true
        }
    })
    logoTl
    .to($(this).find('.section-partner__column[data-direction="left"]'), {x: -100}, 'a')
    .to($(this).find('.section-partner__column[data-direction="right"]'), {x: 100}, 'a')
    .to($(this).find('.section-partner__column[data-direction="left"]'), {x: 0}, 'b')
    .to($(this).find('.section-partner__column[data-direction="right"]'), {x: 0}, 'b')
  })
})

// footer
mm.add("(max-width: 767px)", () => {
  const tl2 = gsap.timeline({
    defaults: {
      ease: 'none'
    },
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
  .set('.logo__icon', {transition: 'none'})
  .to('.logo__icon', {y: '50vh'}, 'a')
  .to('.logo__icon svg', {y: '-50vh'}, 'a')
  .to('.logo__icon', {
    scale: 1,
    y: '97.5vh',
    x: 0,
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
    defaults: {
      ease: 'none'
    },
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
  .set('.logo__icon', {transition: 'none'})
  .to('.logo__icon', {y: '50vh'}, 'a')
  .to('.logo__icon svg', {y: '-50vh'}, 'a')
  .to('.logo__icon', {
    scale: 1,
    y: '97.5vh',
    x: 0,
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
    defaults: {
      ease: 'none'
    },
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
  .set('.logo__icon', {transition: 'none'})
  .to('.logo__icon', {y: '50vh'}, 'a')
  .to('.logo__icon svg', {y: '-50vh'}, 'a')
  .to('.logo__icon', {
    scale: 1,
    y: '96vh',
    x: 0,
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 1401px) and (max-width: 1700px)", () => {
  const tl2 = gsap.timeline({
    defaults: {
      ease: 'none'
    },
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
  .set('.logo__icon', {transition: 'none'})
  .to('.logo__icon', {y: '50vh'}, 'a')
  .to('.logo__icon svg', {y: '-50vh'}, 'a')
  .to('.logo__icon', {
    scale: 1,
    y: '94vh',
    x: 0,
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})
mm.add("(min-width: 1701px)", () => {
  const tl2 = gsap.timeline({
    defaults: {
      ease: 'none'
    },
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
  .set('.logo__icon', {transition: 'none'})
  .to('.logo__icon', {y: '50vh'}, 'a')
  .to('.logo__icon svg', {y: '-50vh'}, 'a')
  .to('.logo__icon', {
    scale: 1,
    y: '90vh',
    x: 0,
    onReverseComplete: function() {
      $('.header__logo').removeAttr('style');
    }
  })
})