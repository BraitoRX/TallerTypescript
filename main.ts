
import { Serie } from './serie.js';

import { series } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;


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
    trElement.innerHTML = `<td>${serie.number}</td>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`
    seriesTbody.appendChild(trElement);
  });
  seriesTbody.appendChild(document.createElement("tr")).innerHTML = `<td colspan="3">Promedio de Seasons: ${promedioSeasons}</td>`;
}

 








