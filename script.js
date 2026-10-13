// To add a new paper, add one object to this list. The grid grows automatically.
var papers = [
  { title: "On a Heuristic Point of View Concerning the Production and Transformation of Light", year: 1905 },
  { title: "On the Motion of Small Particles Suspended in Liquids at Rest", year: 1905 },
  { title: "On the Electrodynamics of Moving Bodies", year: 1905 },
  { title: "Does the Inertia of a Body Depend Upon Its Energy Content?", year: 1905 },
  { title: "The Foundation of the General Theory of Relativity", year: 1916 },
  { title: "Cosmological Considerations in the General Theory of Relativity", year: 1917 }
];

function renderPapers(list) {
  var grid = document.getElementById("paper-grid");
  grid.innerHTML = "";
  list.forEach(function (p) {
    var card = document.createElement("article");
    card.className = "paper";

    var icon = document.createElement("img");
    icon.src = "images/paper.svg";
    icon.alt = "";

    var title = document.createElement("h3");
    title.textContent = p.title;

    var year = document.createElement("span");
    year.className = "year";
    year.textContent = p.year;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(year);
    grid.appendChild(card);
  });
}

renderPapers(papers);
document.getElementById("year").textContent = new Date().getFullYear();
