///////////////////////////////////////////////////////////
$(document).ready(function () {
  $("a").click(function () {
    let gato = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top - 64,
      },
      800
    );
  });
});

///////////////////////////////////////////////////////////
