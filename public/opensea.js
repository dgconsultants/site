(function() {
  const show = document.getElementById('show-more');
  const list = document.getElementById('more-list');
  let collapsed = true;

  show.onclick = function() {
    if(collapsed) {
      show.innerHTML = 'Show less options'
      list.classList.add('block')
      list.classList.remove('hidden')
      collapsed = false;
      return
    }
    show.innerHTML = 'Show more options'
    list.classList.add('hidden')
    list.classList.remove('block')
  }
})()