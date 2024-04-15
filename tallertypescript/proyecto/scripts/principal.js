import { series } from './datos.js';
var seriesTable = document.getElementById("series");
var promedioTemporadasElement = document.getElementById("promedioTemporadas");
var seriesInfo = document.getElementById('seriesInfo');
mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = "<b>Seasons average:</b> ".concat(promedio(series));
function mostrarTablaSeries(datosSeries) {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.addEventListener("click", function () { return mostrarInfo(serie); });
        trElement.classList.add("table-light");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td>").concat(serie.nom, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    };
    for (var _i = 0, datosSeries_1 = datosSeries; _i < datosSeries_1.length; _i++) {
        var serie = datosSeries_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarInfo(serie) {
    seriesInfo.innerHTML = "\n        <div class=\"card\" style=\"width: 19rem;\">\n        <img class=\"card-img-top\" src=\"".concat(serie.imagen, "\"  height: auto;\">\n            <div class=\"card-body\">\n                <h1 class=\"card-title\" style=\"font-size:larger\">").concat(serie.nom, "</h1>   \n                <p>").concat(serie.descripcion, "</p>\n                <p> <a href=\"").concat(serie.donde, "\" target=\"_blank\">").concat(serie.canal, "</a></p>\n            </div>\n        </div>\n    ");
}
function promedio(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.temporadas;
    });
    return sum / series.length;
}

