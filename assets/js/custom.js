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
  onStart: function() {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');

    bodyEl.style.overflow = 'hidden';
    bodyEl.classList.add('is-load');
    videolEls.forEach(function(video, index) {
      video.pause();
    })
  },
  onComplete: function() {
    const bodyEl = document.querySelector('body');
    const videolEls = document.querySelectorAll('video');
    const logo = document.querySelector('.floating');

    bodyEl.removeAttribute('style');
    bodyEl.classList.remove('is-load');
    logo.removeAttribute('style');
    videolEls.forEach(function(video, index) {
      video.play();
    })
  }
});
introMotion
.set('.floating', {color: 'black'})
.fromTo('.loading .marquee__text span', {yPercent: 130}, {yPercent: 0, stargger: .4, duration: 1.2},"+=.6")
.to('.loading__row:nth-child(1)', {yPercent: -130}, "+=.5")
.to('.loading__row:nth-child(2)', {yPercent: 130}, "+=0")
.to('.floating__logo', {scale: 0.36, duration: .8}, "+=.5")
.set('.loading', {display: 'none'}, "+=.5")
.set('.floating__logo', {opacity: 0}, "+=0")
.to('.overlay', {opacity: 0, duration: .7},"+=1")
.set('.floating', {color: 'white'},"+=0")
.set('.floating__logo', {opacity: 1}, "+=0")
.set('.floating__logo--left', {scale: 0.1215}, "+=0")
.set('.floating__logo--center', {x: -163, scale: 0.1161}, "+=0")
.set('.floating__logo--right', {scale: 0.123}, "+=0")
.to('.section-home__item:nth-child(1)', {scale: 1, duration: .8}, "+=.5")




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
    onComplete: function() {
      // $('.section-home__video').eq(index + 1).addClass('is-visible').siblings().removeClass('is-visible');
    }
  }
  )
});

blendedMode();
$(window).on('scroll', function() {
  blendedMode();
})
function blendedMode() {
  const target = $('.section-about').offset().top;
  const scroll = $(window).scrollTop();
  const width = $(window).width();
  if((scroll >= target) && (width >= 1024)) {
    $('.global-nav__inner').addClass('is-blended');
  } else {
    $('.global-nav__inner').removeClass('is-blended');
  }
}


$('.global-nav__menu').on('click', function() {
  $('body').toggleClass('is-nav-open');
})


ScrollTrigger.create({
  trigger: '.section-home',
  start: '100% center',
  end: 'bottom center',
  scrub: 0,
  // markers: true,
  onEnter: function() {
    $('.floating').removeClass('is-blended');
  },
  onLeaveBack: function() {
    $('.floating').removeClass('is-blended');
  },
  onLeave: function() {
    $('.floating').addClass('is-blended');
  }
})

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.section-home',
//     start: '0% 0%',
//     end: '100% 100%',
//     scrub: 0
//   }
// })

// document.querySelectorAll('.section-service__list--right .section-service__item').forEach(function(el, index) {
//   tl.to($('.section-service__list--right .section-service__item').eq(index).find('.section-service__text'), {
//     scale: 0
//   })
// })

// ScrollTrigger.create({
//   trigger: '.section-service',
//   start: '0% 0%',
//   end: '100% 0',
//   markers: true,
//   onLeaveBack: function() {
//     imgEl = $('.section-service__list--right .section-service__item');
//     total = imgEl.length;
//     // $('.section-service__list--right .section-service__item').eq(total).addClass('on');
//   },
//   onUpdate: function(self) {

//     imgEl = $('.section-service__list--right .section-service__item');
//     total = imgEl.length;
//     currImg = Math.round((self.progress * total));
//     curr = imgEl.eq(currImg).find('.section-service__text');
//     console.log(currImg);

//     gsap.to(curr, {
//       scale: 0,
//       duration: .2,
//     })


//     if($('.section-service__list--right .section-service__item.on')) {
//       // imgEl.removeClass('on');
//     }

//     if(curr) {
//       // curr.addClass('on');
//     }
//     // console.log(Math.round(self.progress * imgLength));
//   }
// })

// const reveal = gsap.utils.toArray('.section-service__list--right .section-service__item');
//   reveal.forEach((text,i)=>{
//     ScrollTrigger.create({
//      trigger:text,
//     //  toggleClass:'active',
//     //  start:"top 90%",
//     //  end:"top 20%",
//       start: '0% 0%',
//       // end: '50% 0',
//      markers:true,
//      scrub:true,
//      onUpdate: function(self) {
//       gsap.fromTo($('.section-service__list--right .section-service__item').eq(i).find('.section-service__text'), {
//         scale: 1,
//       }, {
//         scale: 0,
//         duration: Math.round(self.progress),
//       })
//       console.log(i)
//      }
//   });
// });

// const tl = gsap.timeline({});
// tl.fromTo('')