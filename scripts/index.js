
 var pnl = $("#showName");
 var page = 1;
 var pnl1 = $("#showMore")


 $(function () {

    $("#show").on("click", function () {
        showN(page);
    });

    $("#next").on("click", function () {
        showN(++page);
    });

    $("#previous").on("click", function () {
        showN(--page);
    });

    /* $("#showMore").on("click", function() {
         showMo();
     }*/
});

 //?page=2

 function showN(page) {
    $(function () {
        $.ajax({
            url: "http://swapi.co/api/people/?page="+page+"",
            type: "GET",
            data: {}
        }).then(function (data) {
            pnl.empty();
            for (var i = 0; i < data.results.length; i++) {
                var person = data.results[i];

                pnl.append("<h4 style='color: white'>"+ person.name+"</h4>");
                pnl.append("<p style='color: white'>" + "BirtYear: "+person.birth_year +" || "+"Gender: "+  person.gender + "</p>");
                pnl.append("<button type='button' id='infoP' style='text-align: center; color: darkorange' data-id='"+person.url+"'>More Info</button>");
                pnl.append("<hr style='border: solid darkred 4px'>");

            }
        }, function (xhr, textStatus, error) {
            alert("Errore" + error.errorText);
        });


    });
}


//# sourceMappingURL=index.js.map