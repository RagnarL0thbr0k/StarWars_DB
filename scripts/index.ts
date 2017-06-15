/**
 * Created by Utente on 09/05/2017.
 */
var pnl = $("#showName");

$(function () {

    $("#show").on("click", function () {
        showN();
    });
});

function showN() {
    $(function () {
        $.ajax({
            url: "http://swapi.co/api/people",
            type: "GET",
            data: {}
        }).then(function (data) {
            for (var i = 0; i < data.results.length; i++) {
                var person = data.results[i];

                pnl.append("<h4 style='color: white'>"+ person.name+"</h4>")
                pnl.append("<p style='color: white'>" + person.birth_year + person.gender + "</p>");

                //console.log(person.name);
            }
        }, function (xhr, textStatus, error) {
            alert("Errore" + error.errorText);
        });
    });
}