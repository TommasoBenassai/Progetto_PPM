$(document).ready(function() {

    var margin_top= $(".nav_style").outerHeight();
    $("#firstrow").css("margin-top", margin_top);

     $(window).on("resize", function() {
         console.log("resize");
        var margin_top= $(".nav_style").outerHeight();
        $("#firstrow").css("margin-top", margin_top);
    });

     //se scrolliamo di 50px in giù, viene nascosto top_menu
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#top_menu').removeClass("tablet");
            $('#top_menu').css("display", "none");
        }else {
            $('#top_menu').addClass("tablet");
            $('#top_menu').css("display", "flex");
        }
    });

     //data di oggi in formato giorno in lettere, giorno numero mese in lettere anno
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var day = today.getDay();
        var day_name = "";
        switch (day) {
            case 0:
                day_name = "domenica";
                break;
            case 1:
                day_name = "lunedì";
                break;
            case 2:
                day_name = "martedì";
                break;
            case 3:
                day_name = "mercoledì";
                break;
            case 4:
                day_name = "giovedì";
                break;
            case 5:
                day_name = "venerdì";
                break;
            case 6:
                day_name = "sabato";
                break;
        }
        today = day_name + ", " + dd + " ";
        switch (mm) {
            case 1:
                today += "gennaio";
                break;
            case 2:
                today += "febbraio";
                break;
            case 3:
                today += "marzo";
                break;
            case 4:
                today += "aprile";
                break;
            case 5:
                today += "maggio";
                break;
            case 6:
                today += "giugno";
                break;
            case 7:
                today += "luglio";
                break;
            case 8:
                today += "agosto";
                break;
            case 9:
                today += "settembre";
                break;
            case 10:
                today += "ottobre";
                break;
            case 11:
                today += "nNovembre";
                break;
            case 12:
                today += "dicembre";
                break;
        }
        today += " " + yyyy;
        $("#data_estesa").html(today);
        //se mm contiene un solo carattere aggiungo uno zero
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "/" + mm + "/" + yyyy;
        $("#data_contratta").html(today);
});
