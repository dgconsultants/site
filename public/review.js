const template = `
  <div class="my-5 md:m-5 w-full md:w-96 relative">
    <div class="relative -bottom-12 w-96 flex">
      <div class="h-28 w-28 mx-auto bg-black rounded-full">
        <img class="h-full w-full object-cover rounded-full" id="image" src="./images/Ellipse 137.png" alt="">
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg p-5 pt-20 pb-10">
      <div id="stars" class="mb-5 flex justify-center">
      </div>
      <div class="text-center mb-5">
        <div id="name" class="mb-1 text-sm"></div>
        <div id="location" class="text-gray-400 text-xs"></div>
      </div>
      <p id="text" class="text-xs text-gray-500"></p>
    </div>
  </div>
`;

(async function() {
  const wrapper = document.getElementById("reviews");
  const response = await fetch("/all-reviews");
  const { docs } = await response.json();

  docs.forEach(({ name, location, review, stars, image }) => {
    const _node = document.createElement('template');
    _node.innerHTML = template;
    const node  = _node.content;

    node.getElementById("name").textContent = name;
    node.getElementById("location").textContent = location;
    node.getElementById("text").textContent = review;
    node.getElementById("image").setAttribute("src", image.url)

    const stars_node = node.getElementById("stars");
    [...(new Array(stars))].forEach(() => {
      const img = document.createElement('img');
      img.classList.add("h-5", "mx-2", "w-5")
      img.setAttribute('src', "./images/star.svg")
      console.log(img)
      stars_node.append(img);
    })

    wrapper.append(node);
  });
})();