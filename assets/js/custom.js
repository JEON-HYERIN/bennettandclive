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
    bodyEl.classList.add('is-load');
    videolEls.forEach(function (video, index) {
      video.pause();
      lenis.stop();
    })
  },
  onComplete: function () {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');
    const floating = document.querySelector('.floating');
    const floatingLogoEls = floating.querySelectorAll('.floating__logo');

    bodyEl.removeAttribute('style');
    bodyEl.classList.remove('is-load');
    floating.removeAttribute('style');
    videolEls.forEach(function (video, index) {
      video.play();
      lenis.start();
    })

    floatingLogoEls.forEach(function (logo, index) {
      logo.removeAttribute('style');
    })
  }
});
introMotion
  .set('.floating', {
    color: 'black'
  })
  .fromTo('.loading .marquee__text span', {
    yPercent: 130
  }, {
    yPercent: 0,
    stargger: .4,
    duration: 1.2
  }, "+=.6")
  .to('.loading__row:nth-child(1)', {
    yPercent: -130
  }, "+=.5")
  .to('.loading__row:nth-child(2)', {
    yPercent: 130
  }, "+=0")
  .to('.floating__logo', {
    scale: 0.36,
    duration: .8
  }, "+=.5")
  .set('.loading', {
    display: 'none'
  }, "+=.5")
  .set('.floating__logo', {
    opacity: 0
  }, "+=0")
  .to('.overlay', {
    opacity: 0,
    duration: .7
  }, "+=1")
  .set('.floating', {
    color: 'white'
  }, "+=0")
  .set('.floating__logo', {
    opacity: 1
  }, "+=0")
  .set('.floating__logo--left', {
    scale: 0.1215
  }, "+=0")
  .set('.floating__logo--center', {
    x: -163,
    scale: 0.1161
  }, "+=0")
  .set('.floating__logo--right', {
    scale: 0.123
  }, "+=0")
  .from('.global-nav__link', {
    opacity: 0,
    y: 10,
    stagger: .2,
    ease: 'none'
  }, "+=.2")
  .to('.section-home__item:nth-child(1)', {
    scale: 1,
    duration: .8
  }, "+=.5")




tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-home',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  }
})

document.querySelectorAll('.section-home__video').forEach((element, index) => {
  tl.fromTo($('.section-home__video').eq(index + 1), {
    yPercent: 100,
  }, {
    yPercent: 0,
    scrub: 3,
    ease: 'none',
    duration: 15,
    onComplete: function () {
      // $('.section-home__video').eq(index + 1).addClass('is-visible').siblings().removeClass('is-visible');
    }
  })
});

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
  trigger: '.section-home',
  start: '100% center',
  end: 'bottom center',
  scrub: 0,
  // markers: true,
  onEnter: function () {
    $('.floating').removeClass('is-blended');
  },
  onLeaveBack: function () {
    $('.floating').removeClass('is-blended');
  },
  onLeave: function () {
    $('.floating').addClass('is-blended');
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
  
    currentHour = current.getHours();
    currentMinute = current.getMinutes();
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

// const homeLists = document.querySelectorAll('.section-home__link');
// homeLists.forEach(function(item, index) {
//   gsap.to(item, {
//     scale: 1,
//     yPercent: -110,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top 60%',
// 			end: 'bottom 60%',
// 			scrub: 0,
//       markers: true,
//       stagger: .2
//     }
//   })
// });

let mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", () => {
  const partners = document.querySelectorAll('.section-partner__column');
  partners.forEach(function(el, index) {
    if(el.dataset.direction === 'left') {
      gsap.to(el, {
        x: -100,
        scrollTrigger: {
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          stagger: .2,
          scrub: 1,
          ease: "power3.out",
          // markers: true
        }
      })
    }
    if(el.dataset.direction === 'right') {
      gsap.to(el, {
        x: 100,
        scrollTrigger: {
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          stagger: .2,
          scrub: 1,
          ease: "power3.out",
          markers: true
        }
      })
    }
  });
})