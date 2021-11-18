$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('form').validator();


  // when the form is submitted
  $('form').on('submit', function (e) {
    e.preventDefault();
    fetch(`https://portfolio-works-app.herokuapp.com/register?${$(this).serialize()}`, {
      method: 'post',
      body: new FormData($(this)[0])
    })
      .then((res) => res.json())
      .then(res => {
        console.log(res)
      })
  })
});
