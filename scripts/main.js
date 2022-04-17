import { series } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioSeasons = getPromedioSeasons(series);
renderseriesInTable(series);
function getPromedioSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
function renderseriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.number, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    seriesTbody.appendChild(document.createElement("tr")).innerHTML = "<td colspan=\"3\">Promedio de Seasons: ".concat(promedioSeasons, "</td>");
}
