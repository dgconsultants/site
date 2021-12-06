$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('form').validator();

    const dataModalButton = document.querySelectorAll('[data-modal]')
  let currModal = null;
  
  Array.from(dataModalButton).forEach(btn => {
    
    btn.onclick = function ({ target }) {
      const modalTarget = target.dataset.modal;
      
      if(document.querySelector(`.modal.visible`))
        document.querySelector(`.modal.visible`).classList.remove('visible')

      if(currModal === modalTarget) {
        currModal = null
        return
      };
      currModal = modalTarget
      document.querySelector(`[data-modal-target=${modalTarget}]`).classList.toggle('visible')
    }
  })


  // when the form is submitted
  $('form').on('submit', function (e) {
    e.preventDefault();
    fetch(`https://portfolio-works-app.herokuapp.com/register?${$(this).serialize()}`, {
      method: 'post',
      body: new FormData($(this)[0])
    })
      .then((res) => res.json())
      .then(res => {
        document.getElementById('application-final-modal').classList.toggle('visible')
      })
  })
});
