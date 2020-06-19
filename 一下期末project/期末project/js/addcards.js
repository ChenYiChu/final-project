const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById("backdrop");

const startAddMovieButton = document.querySelector("header button");

const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
//console.log("cancelAddMovieButton", cancelAddMovieButton);
//console.log("confirmAddMovieButton", confirmAddMovieButton);

const userInputs = addMovieModal.querySelectorAll("input");
//console.log("userInput", userInputs);

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "black";
  } else {
    entryTextSection.style.display = "none";
  }
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  
    <div class="col-md-4">
      <div class="card profile-card-2">
        <div class="card-img-block">
          <div class="movie-element__image">
            <img
          class="img-fluid"
          src="${imageUrl}"
          alt="Card image cap"
            />
          </div>
        </div>
        <div class="card-body pt-5">
          <div class="movie-element__image">
            <img src="${imageUrl}" alt="" class="profile" />
          </div>
          <div class="movie-element__info">
            <h5 class="card-title">${title}</h5>
          </div>
          <p class="card-text">
          ${rating}
          </p>
          <div class="icon-block">
          <a href="#"
            ><i class="fa fa-globe fa-2x"></i></a
          ><a href="#"> <i class="fa fa-edit fa-2x"></i></a
          ><a href="#"> <i class="fa fa-trash-o fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
  updateUI();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  //console.log(titleValue, imageUrlValue, ratingValue);

  if (titleValue.trim() === "" || imageUrlValue === "" || ratingValue === "") {
    alert("Please enter valid value");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  //console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", toggleMovieModal);

cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
