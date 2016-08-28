$( document ).ready(function() {
  $('.js-article__body p img').unwrap().wrap('<figure></figure>').after(function() {
    return '<figcaption>'+this.alt+'</figcaption>';
  });
});
