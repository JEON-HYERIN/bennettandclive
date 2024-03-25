const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


bar = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-home',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  }
})

document.querySelectorAll('.section-home__video').forEach((element, index) => {
  bar.fromTo($('.section-home__video').eq(index + 1), {
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

$(window).on('scroll', function() {
  const target = $('.section-about').offset().top;
  const scroll = $(window).scrollTop();
  if(scroll >= target) {
    $('.header').addClass('is-blended');
  } else {
    $('.header').removeClass('is-blended');
  }
})


ScrollTrigger.create({
  trigger: '.section-home',
  start: '100% center',
  end: 'bottom center',
  scrub: 0,
  // markers: true,
  onEnter: function() {
    $('.floating-logo').removeClass('is-blended');
  },
  onLeaveBack: function() {
    $('.floating-logo').removeClass('is-blended');
  },
  onLeave: function() {
    $('.floating-logo').addClass('is-blended');
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