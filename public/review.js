const template = `
  <div class="my-5 md:m-5 w-full md:w-96 relative">
    <div class="bg-gray-100 rounded-lg p-5 py-8">
      <div id="stars" class="mb-5 flex justify-center">
      </div>
      <div class="text-center mb-5">
        <div id="name" class="mb-1 text-sm"></div>
        <div id="location" class="text-gray-400 text-xs"></div>
      </div>
      <p id="text" class="text-xs text-gray-500"></p>
      <div class="text-xs text-gray-400 mt-5" id="date"></div>
    </div>
  </div>
`;

(async function() {
  const wrapper = document.getElementById("reviews");
  const response = await fetch("/all-reviews");
  const { docs } = await response.json();
  const count = wrapper.dataset.count;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']

  docs.splice(0, count || docs.length).forEach(({ name, location, review, stars, date }) => {
    const _node = document.createElement('template');
    _node.innerHTML = template;
    const node  = _node.content;

    node.getElementById("name").textContent = name;
    node.getElementById("location").textContent = location;
    node.getElementById("text").textContent = review;

    const _date = date ? new Date(date) : new Date();
    node.getElementById("date").textContent = `${months[_date.getUTCMonth()]}, ${_date.getUTCDay()} ${_date.getFullYear()}`;
    // node.getElementById("image").setAttribute("src", `${image.url}`)

    const stars_node = node.getElementById("stars");
    [...(new Array(stars))].forEach(() => {
      const img = document.createElement('img');
      img.classList.add("h-5", "mx-1", "w-5")
      img.setAttribute('src', "./images/star.svg")
      console.log(img)
      stars_node.append(img);
    })

    wrapper.append(node);
  });
})();