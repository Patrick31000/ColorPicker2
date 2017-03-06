$(document).ready(function() {
    var red, green, blue, bgColor, red2, green2, blue2, bgColor2, degre;

    $(function() {
        $("#r").on('mousemove', function() {
            red = $(this).val();
            console.log(red);

        });

        $("#g").on('mousemove', function() {
            green = $(this).val();

        });

        $("#b").on('mousemove', function() {
            blue = $(this).val();
        });


        $("#r2").on('mousemove', function() {
            red2 = $(this).val();
            console.log(red);

        });

        $("#g2").on('mousemove', function() {
            green2 = $(this).val();

        });

        $("#b2").on('mousemove', function() {
            blue2 = $(this).val();
        });

        $("#d").on('mousemove', function() {
            degre = $(this).val();
        });


        $("input").on('mousemove', function() {

            bgColor = "rgb(" + red + "," + green + "," + blue + ")";
            console.log(bgColor);
            $('#Color').css("background-color", bgColor);

            bgColor2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";
            console.log(bgColor2);
            $('#Color2').css("background-color", bgColor2);
            $('body').css('background', 'linear-gradient(' + degre + 'deg,' + bgColor + ',' + bgColor2);


        });

    });
});