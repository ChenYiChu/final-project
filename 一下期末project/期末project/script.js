const demoList = document.getElementById("demo-list");
const demo = document.getElementById("demo");

class ClassDemo {
  constructor(title, imageUrl, description, handlerCode) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.handlerCode = handlerCode;
  }
}

class ClassDemoItem {
  constructor(classDemo) {
    this.classDemo = classDemo;
  }

  render() {
    const card = document.createElement("div");

    card.innerHTML = `
    <div class="col-md-4">
      <div class="card profile-card-2">
        <div class="card-img-block">
          <div class="movie-element__image">
            <img
            class="img-fluid"
            src="${this.classDemo.imageUrl}"
            alt="Card image cap"
            />
          </div>
        </div>
        <div class="card-body pt-5">
          <div class="movie-element__info">
            <h5 class="card-title">${this.classDemo.title}</h5>
          </div>
          <p class="card-text">
          ${this.classDemo.description}
          </p>
          <div class="d-flex justify-content-around align-items-center">
            <a
              href="#"
              onclick="showDemo('${this.classDemo.handlerCode}')"
              "
            >
            <i class="fa fa-globe fa-2x"></i>
            </a>
            <i class="fa fa-edit fa-2x"></i>
            <i class="fa fa-trash-o fa-2x" onclick="deleteDemo(${this.classDemo.id})"></i> 
          </div>
        </div>
      </div>
    </div>
    `;
    return card;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      "Unconventional Calculator",
      "./images/1.PNG",
      "Using calculator to teach JavaScript basic concepts",
      "./JS demo/Unconventional Calculator/index.html"
    ),
    new ClassDemo(
      "Monster Killer",
      "./images/3.PNG",
      "Using Monster Killer to demonstrate how to use JavaScript if end loops",
      "./JS demo/Monster Killer/index.html"
    ),
    new ClassDemo(
      "DOM Movie",
      "./images/4.PNG",
      "Using DOM Movie to show how to interact with DOM objects",
      "./JS demo/DOM Movie Project/index.html"
    ),
    new ClassDemo(
      "Movie Player",
      "./images/2.PNG",
      "Using DOM Movie to show how to interact with DOM objects",
      "./JS demo/Movie Player/index.html"
    ),
    new ClassDemo(
      "Music Player",
      "./images/5.PNG",
      "Using DOM Movie to show how to interact with DOM objects",
      "./JS demo/Music Player/index.html"
    ),
  ];

  constructor() {}

  render() {
    const header = document.createElement("h2");
    header.id = "mid-heading";
    // header.ClassList = 'visible';
    header.innerHTML = `
    108-2 JavaScript Final Project &nbsp &nbsp &nbsp &nbsp
    <a class="btn btn-outline-warning">
      <i class="fa fa-plus"></i>
    </a>
    `;
    demoList.append(header);
    const cardList = document.createElement("div");
    cardList.classList = "row";
    cardList.id = "mid-card-list";
    for (const item of this.demos) {
      const demoItem = new ClassDemoItem(item);
      const demoEl = demoItem.render();
      cardList.append(demoEl);
    }
    demoList.append(cardList);
  }
}
const classDemoList = new ClassDemoList();
console.log(ClassDemoList);
classDemoList.render();

const showDemoList = (item) => {
  demoList.classList = "visible";
  demo.classList = "invisible";
};

const showDemo = (srcUrl) => {
  demoList.classList = "invisible";
  demo.classList = "visible";
  demo.style.marginTop = "100px";
  demo.innerHTML = `
  <iframe src="${srcUrl}" height="900px width="100%"></iframe>
  `;
};

const deleteDemo = (id) => {
  classDemoList.demos.forEach((item, i) => {
    if (item.id == id) classDemoList.demos.splice(i, 1);
  });
  demoList.innerHTML = "";
  classDemoList.render();
};

// switch (item) {
//   case "calculator":
//     demo.innerHTML = `
//       <iframe src="./w2-calculator/index.html" height="700px" width=100% ></iframe>
//     `;
//     break;
//   case "monster":
//     demo.innerHTML = `
//       <iframe src="./w4-monster/index.html" height="900px" width=100% ></iframe>
//     `;
//     break;
//   case "dom-movie":
//     demo.innerHTML = `
//       <iframe src="./w7-dom-movie/index.html" height="700px" width=100% ></iframe>
//     `;
//     break;
// }
