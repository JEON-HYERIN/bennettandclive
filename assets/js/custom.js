const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const stickySlide = new Swiper('.section-home .swiper', {
  direction: 'vertical',
  parallax: true,
  speed: 1200,
  touchRatio: 0,
})

bar = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-home',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  }
})

// document.querySelectorAll('.section-home__video').forEach((element, index) => {
//   bar.to($('.section-home__video').eq(index), {
//     ease: "none",
//     onComplete: function () {
//       stickySlide.slideTo(index + 1)
//     },
//     onReverseComplete: function () {
//       stickySlide.slideTo(index - 1)
//     }
//   })
// });
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

// ScrollTrigger.create({
//   trigger: '.section-home .first',
//   start: '0% 0%',
//   end: '100% 0',
//   // markers: true,
//   onLeaveBack: function () {
//     imgEl = $('.section-home__title');
//     total = imgEl.length;
//     $('.first .section-home__title').eq(total).addClass('on');
//   },
//   onUpdate: function (self) {

//     imgEl = $('.first .section-home__title');
//     total = imgEl.length;
//     currImg = Math.round(self.progress * total);
//     curr = imgEl.eq(currImg);

//     if ($('.first .section-home__title.on')) {
//       imgEl.removeClass('on');
//     }
//     console.log(currImg, self.progress)

//     if (curr) {
//       curr.addClass('on');
//     }
//     // console.log(Math.round(self.progress * imgLength));
//   }
// })