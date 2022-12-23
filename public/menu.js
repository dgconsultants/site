(function() {
  let collapsed = true;
  const trigger = document.getElementById('menu-trigger');
  const menu = document.getElementById('services-menu');

  trigger.onclick = function(e) {
    e.preventDefault()
    menu.classList.toggle("hidden");
  }
})()