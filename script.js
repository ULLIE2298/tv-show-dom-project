// You can edit ALL of the code here
let search = document.getElementById("search");
let searchResult = document.getElementById("searchResult");
let rootElem = document.getElementById("root");
let allEpisodes = getAllEpisodes();
let selector = document.getElementById("selector");
let newList = [];
let selectedOpt = [];

function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) { 
  for (let episode of episodeList) {
    let container = document.createElement("div");
    container.className = "column";
    rootElem.appendChild(container);
    let episodeEl = document.createElement("div");
    episodeEl.className = "episode";
    let nameEp = document.createElement("p");
    nameEp.className = "name_Of_Ep";
    let pEl = document.createElement("p");
    pEl.className = "Se_and_Ep";
    let imgEl = document.createElement("img");
    let summaryP = document.createElement("p");
    summaryP.className = "summary";

    nameEp.textContent = `${episode.name}`;
    imgEl.src = episode.image.medium;
    summaryP.innerHTML = episode.summary;

    if(episode.season < 10 && episode.number < 10){
      pEl.textContent = `S0${episode.season}E0${episode.number}`;
    }else if(episode.season < 10 && episode.number < 100){
        pEl.textContent = `S0${episode.season}E${episode.number}`;
    }

    
    container.appendChild(episodeEl);
    episodeEl.appendChild(nameEp);
    episodeEl.appendChild(pEl);
    container.appendChild(imgEl);
    container.appendChild(summaryP);
  }
}

// selection bar options
function addOption(episodeArray){
  let displayAllEp = document.createElement("option");
  selector.appendChild(displayAllEp);
  displayAllEp.innerText = "Display all";

  episodeArray.forEach(element => {
    let optionElem = document.createElement("option");
    selector.appendChild(optionElem);
    if (element.season < 10 && element.number < 10) {
      optionElem.textContent = `S0${element.season}E0${element.number} - ${element.name}`;
    } else if (element.number < 11 && element.season < 10) {
      optionElem.textContent = `S0${element.season}E${element.number} - ${element.name}`;
    }
  });
}
addOption(allEpisodes);

// Selection bar output
selector.addEventListener("click", () => {
  let selection = selector.value;
  if(selection === "Display all") {
    rootElem.innerHTML = "";
    makePageForEpisodes(allEpisodes);
  } else {
    selectedOpt = allEpisodes.filter(el => selection.includes(el.name));
    rootElem.innerHTML = "";
    makePageForEpisodes(selectedOpt);
  }
});

// Search input
search.addEventListener("input", () => {
    let result = search.value.toLowerCase();
    newList = allEpisodes.filter( (el) => {
      return (
            el.name.toLowerCase().includes(result) || 
            el.summary.toLowerCase().includes(result)
      );
    });
   
    rootElem.innerHTML = "";
    selector.innerHTML = "";
    addOption(newList);
    makePageForEpisodes(newList);

    searchResult.innerText = `Displaying ${newList.length}/${allEpisodes.length}`;
  });

window.onload = setup;