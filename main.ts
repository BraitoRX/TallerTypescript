
import { Serie } from './serie.js';

import { series } from './dataSeries.js';
let seriesTbody: HTMLElement = document.getElementById('series')!;
let card: HTMLElement = document.getElementById('card')!;

let promedioSeasons: number = getPromedioSeasons(series);
renderseriesInTable(series);



function getPromedioSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons / series.length;
}

function renderseriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td >${serie.number}</td>
                            <td></td>
                            <td>${serie.channel}</td
                            <td>${serie.seasons}</td>
                            `
    seriesTbody.appendChild(trElement);
    let aElement = document.createElement("a");
    aElement.innerHTML = serie.name;
    aElement.href = "javascript:void(0)";
    aElement.onclick = () => {
      card.innerHTML = `<div class="card">
                          <div class="card-image">
                            <img src="${serie.photo}" width="100%">
                          </div>
                          <div class="card-content">
                            <h1>${serie.name}</h1>
                            <p>${serie.description}</p>
                            <a href="${serie.link}" target="_blank">${serie.link}</a>
                          </div>`
    }

    trElement.children[1].appendChild(aElement);
    
  });

  seriesTbody.appendChild(document.createElement("tr")).innerHTML = `<td colspan="3">Promedio de Seasons: ${promedioSeasons}</td>`;
}










