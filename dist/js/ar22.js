/*
 *
 * ar22.js
 * Started 11/07/2022
 *
 */
$(document).ready(function() {

  // Scroll to top button
  var mq = window.matchMedia("(max-width: 40rem)");
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var offset = 400;
  var scrollButton = $('.gototop');

  $(window).scroll(function(event) {
    didScroll = true;
    if (mq) {
      offset = 200;
    }
  });

  // Hide Header on on scroll down
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  //smooth scroll to top
  scrollButton.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, 500);
  });

  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > offset && st > lastScrollTop) {
      // Scroll Down
      scrollButton.removeClass('gototop-is-visible').addClass('gototop-fade-out');
    } else if (st <= offset) {
      scrollButton.removeClass('gototop-is-visible').addClass('gototop-fade-out');
    } else {
      // Scroll Up
      scrollButton.addClass('gototop-is-visible').removeClass('gototop-fade-out');
      if (st + $(window).height() < $(document).height()) {
      // PUNT?
      }
    }
    lastScrollTop = st;
  }

});
