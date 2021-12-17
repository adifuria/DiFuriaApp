const divCars = `
<div class="col-12 col-md-4">
    <a href="__link__" target="_blank">
    <div class="card">
    <img src="__src__" class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">__top__. __title__</h5>
        <p class="card-text">
            __description__
        </p>
    </div>
    </div>
    </a>
</div>
`;

const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};

const fetchApiDone = (json) => {
  const divList = document.getElementById("list");
  json.forEach((cars, i) => {
    const newDivCars = divCars
      .replace("__link__", cars.link)
      .replace("__src__", cars.img)
      .replace("__top__", i + 1)
      .replace("__title__", cars.name)
      .replace("__description__", cars.description);
    divList.appendChild(htmlToElement(newDivCars));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetch("api/cars.json").then((response) =>
    response.json().then(fetchApiDone)
  );
});

const goToAdd = () => {
  console.log("goToAdd");
  const pageAdd = document.getElementById("pageAdd");
  const pageDesc = document.getElementById("pageUpd");
  const pageList = document.getElementById("pageList");
  pageAdd.className = " ";
  pageUpd.className = "hidden";
  pageList.className = "hidden";
}
const goToList = () => {
  console.log("goToList");
  const pageAdd = document.getElementById("pageAdd");
  const pageDesc = document.getElementById("pageUpd");
  const pageList = document.getElementById("pageList");
  pageAdd.className = "hidden";
  pageUpd.className = "hidden";
  pageList.className = "";
  pageDelete.className = "hidden";
}
const goToUpdate = () => {
  console.log("goToUpdate");
  const pageAdd = document.getElementById("pageAdd");
  const pageDesc = document.getElementById("pageUpd");
  const pageList = document.getElementById("pageList");
  pageAdd.className = "hidden";
  pageUpd.className = "";
  pageList.className = "hidden";
  pageDelete.className = "hidden";
}
const goToDelete = () => {
  console.log("goToDelete");
  const pageAdd = document.getElementById("pageAdd");
  const pageDesc = document.getElementById("pageUpd");
  const pageList = document.getElementById("pageList");
  const pageDelete = document.getElementById("pageDelete");
  pageAdd.className = "hidden";
  pageUpd.className = "hidden";
  pageList.className = "hidden";
  pageDelete.className = "";
  
}