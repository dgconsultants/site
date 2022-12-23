$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  // $('form').validator();

  // when the form is submitted
  $('form').on('submit', function (e) {
    e.preventDefault();

    console.log(this.elements, $(this).serialize())
    
    const cant = Array
      .from(this.elements)
      .findIndex(e => (e.value == "") && (e.type !== 'submit'))

    if(cant !== -1) return;

    fetch(`https://portfolio-works101.herokuapp.com/register?${$(this).serialize()}`, {
      method: 'post',
      body: new FormData($(this)[0])
    })
      .then((res) => res.json())
      .then(res => {
        alert("Form Submitted. :)")
      })
      .catch(() => {
        alert("Form could not be submitted!")
      })
  })
});
