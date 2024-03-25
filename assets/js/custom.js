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

document.querySelectorAll('.section-home__slide').forEach((element, index) => {
  bar.to($('.section-home__slide').eq(index), {
    ease: "none",
    onComplete: function () {
      stickySlide.slideTo(index + 1)
    },
    onReverseComplete: function () {
      stickySlide.slideTo(index - 1)
    }
  })
});

ScrollTrigger.create({
  trigger: '.section-home .first',
  start: '0% 0%',
  end: '100% 0',
  // markers: true,
  onLeaveBack: function() {
    imgEl = $('.section-home__title');
    total = imgEl.length;
    $('.first .section-home__title').eq(total).addClass('on');
  },
  onUpdate: function(self) {

    imgEl = $('.first .section-home__title');
    total = imgEl.length;
    currImg = Math.round(self.progress * total);
    curr = imgEl.eq(currImg);

    if($('.first .section-home__title.on')) {
      imgEl.removeClass('on');
    }
    console.log(currImg, self.progress)

    if(curr) {
      curr.addClass('on');
    }
    // console.log(Math.round(self.progress * imgLength));
  }
})

$('.nav__link').on('mouseenter', function() {
  // $(this).parent().addClass('is-active').siblings().removeClass('is-active');
})

$('.nav__link').on('mouseleave', function() {
  // $('.nav__item').eq(0).addClass('is-active').siblings().removeClass('is-active');
})