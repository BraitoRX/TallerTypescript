import { series } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var card = document.getElementById('card');
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
        trElement.innerHTML = "<td >".concat(serie.number, "</td>\n                            <td></td>\n                            <td>").concat(serie.channel, "</td\n                            <td>").concat(serie.seasons, "</td>\n                            ");
        seriesTbody.appendChild(trElement);
        var aElement = document.createElement("a");
        aElement.innerHTML = serie.name;
        aElement.href = "javascript:void(0)";
        aElement.onclick = function () {
            card.innerHTML = "<div class=\"card\">\n                          <div class=\"card-image\">\n                            <img src=\"".concat(serie.photo, "\" width=\"100%\">\n                          </div>\n                          <div class=\"card-content\">\n                            <h1>").concat(serie.name, "</h1>\n                            <p>").concat(serie.description, "</p>\n                            <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a>\n                          </div>");
        };
        trElement.children[1].appendChild(aElement);
    });
    seriesTbody.appendChild(document.createElement("tr")).innerHTML = "<td colspan=\"3\">Promedio de Seasons: ".concat(promedioSeasons, "</td>");
}
