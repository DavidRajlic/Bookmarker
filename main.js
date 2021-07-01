const site = document.querySelector(".site");
const submit = document.querySelector(".btn");
const url = document.querySelector(".URL");
const p = document.createElement("p");
const result = document.querySelector(".result")

function createResult() {
  p.classList.add(".p");
  const div = document.createElement("div");
  div.appendChild(p);
  div.innerHTML = '<div class="dov" </div>' + site.value;
  result.appendChild(div);
  result.innerHTML += '<button class="visit"> VISIT </button>' + '<button class="remove"> REMOVE </button>'+ '<br>'
}


submit.addEventListener('click', function(e) {
e.preventDefault();
createResult();
let getData = {
  name: site.value,
  url: url.value
}

// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("bookmarks", JSON.stringify(getData));
  localStorage.setItem("bookmark", site.value);
  p.innerHTML = localStorage.getItem("bookmark");
} else {
  result.innerHTML = "Sorry, your browser does not support Web Storage...";
}
const divs = Array.from(document.querySelectorAll (".dov"));
const visit = Array.from(document.querySelectorAll(".visit"))
const remove = Array.from(document.querySelectorAll (".remove"));

for (let i=0; i<divs.length;i++) {
  remove[i].addEventListener('click', function(e) {
    e.preventDefault();
      divs[i].style.display = "none";
      remove[i].style.display = "none";
      visit[i].style.display = "none";
  });
}

});

//visit.addEventListener('click', function(e) {
  //e.preventDefault();

//});

