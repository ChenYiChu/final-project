const predictions = document.getElementById("prediction");
const timezone = document.getElementById("time");
const fixtures = document.getElementById("fixture");
const teams = document.getElementById("team");
const leagues = document.getElementById("league");
const events = document.getElementById("event");
const players = document.getElementById("player");
const topScorers = document.getElementById("topScorer");

function searchPredictions() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchTimezone() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/timezone", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchFixtures() {
  fetch(
    "https://api-football-v1.p.rapidapi.com/v2/fixtures/live?timezone=Europe%252FLondon",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchTeams() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/teams/team/33", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchLeagues() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/leagues", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchEvents() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/events/214226", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchPlayers() {
  fetch(
    "https://api-football-v1.p.rapidapi.com/v2/players/player/253/2018-2019",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchTopScorers() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/4", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "0e9e2c2746msh857eaaa25e298fep1bf09ejsn042b4789b380",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

predictions.addEventListener("click", searchPredictions);
timezone.addEventListener("click", searchTimezone);
fixtures.addEventListener("click", searchFixtures);
leagues.addEventListener("click", searchLeagues);
events.addEventListener("click", searchEvents);
players.addEventListener("click", searchPlayers);
topScorers.addEventListener("click", searchTopScorers);
