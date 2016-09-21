$( document ).ready(function() {
  $('.js-article-content p img').unwrap().wrap('<figure></figure>').after(function() {
    return '<figcaption>'+this.alt+'</figcaption>';
  });
});
