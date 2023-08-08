$(document).ready(function() {
    $(".convert").click(function() {
        event.preventDefault();
        if ($("#Fahrenheit").val()) {
            var f = Number($("#Fahrenheit").val());
            var c = (f - 32) * (5 / 9);
            var k = c + 273.15;
            var r = f + 459.67;
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));
        } else if ($("#Celsius").val()) {
            var c = Number($("#Celsius").val());
            var f = (c * (9 / 5)) + 32;
            var k = c + 273.15;
            var r = f + 459.67;
            $('#Fahrenheit').val(parseFloat(f.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));

        } else if ($("#Kelvin").val()) {
            var k = Number($("#Kelvin").val());
            var c = k - 273.15;
            var f = (c * (9 / 5)) + 32;
            var r = f + 459.67;
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Fahrenheit").val(parseFloat(f.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));

        } else if ($("#Rankine").val()) {
            var r = Number($("#Rankine").val());
            var f = r - 459.67;
            var c = (f - 32) * (5 / 9);
            var k = c + 273.15;
            $("#Fahrenheit").val(parseFloat(f.toFixed(4)));
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
        } else {
            alert("Please Enter a Number to Convert");
        }
    })
})

$(".reset").click(function() {
    location.reload(true);
})