window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#convertbutton").click(function() {
        var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();
        if (((metricValue.length !=0) && (imperialValue.length !=0))
        || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }
    });
    $("#clearbutton").click(function() {
        $("#imperialinput").val('');
        $("#metricinput").val('');
    });

});

$(document).ready(function () {

    $("#add").click(function () {
        var numoneValue = $("#numone").val();
        var numtwoValue = $("#numtwo").val();

        if ((numoneValue.length == 0) || (numtwoValue.length == 0))
        {
            alert("Please populatate two textboes with numbers");
        }

        $("#answer").val(calc.add(numoneValue, numtwoValue));

    });
    $("#divide").click(function () {
        var numoneValue = $("#numone").val();
        var numtwoValue = $("#numtwo").val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert("Please populatate two textboes with numbers");
        }
        $("#answer").val(calc.divide(numoneValue, numtwoValue));

    });
    $("#multiply").click(function () {
        var numoneValue = $("#numone").val();
        var numtwoValue = $("#numtwo").val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert("Please populatate two textboes with numbers");
        }
        $("#answer").val(calc.multiply(numoneValue, numtwoValue));

    });
    $("#subtract").click(function () {
        var numoneValue = $("#numone").val();
        var numtwoValue = $("#numtwo").val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert("Please populatate two textboes with numbers");
        }
        $("#answer").val(calc.subtract(numoneValue, numtwoValue));

    });

 
    $("#clearbutton").click(function () {
        $("#numone").val('');
        $("#numtwo").val('');
        $("#answer").val('');

    });
});

