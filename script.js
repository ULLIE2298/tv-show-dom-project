// You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  console.log(episodeList[0]);  

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

    let info = document.getElementById("info");

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

window.onload = setup;