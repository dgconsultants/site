(function() {
  const faqs = document.getElementsByClassName("faq")

  Array.from(faqs).forEach((faq) => {
    faq.onclick = function (params) {
      faq.lastElementChild.classList.toggle("hidden");
    }
  })
})();