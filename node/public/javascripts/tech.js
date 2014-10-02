var predictionsREDsouth = "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=rx_hA9SfFEOuTpxT4fGKrw&stop=70071&direction=1&format=json"
	// generates predictions for Red Line toward Ashmont or Braintree

var predictionsREDnorth = "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=rx_hA9SfFEOuTpxT4fGKrw&stop=70072&direction=1&format=json"
	// generates predictions for Red Line toward Alewife

var alertsREDsouth = "http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=rx_hA9SfFEOuTpxT4fGKrw&route=933_&include_access_alerts=false&include_service_alerts=true&format=json"
	// alert messages for Southbound Red Line

var predictionsTEK = "http://proximobus.appspot.com/agencies/mit/stops/51/predictions.json";
	// tech shuttle and saferide cambridge, at tang/westgate

var predictionsSFBOS = "http://proximobus.appspot.com/agencies/mit/stops/62/predictions.json";
	// saferide boston, at audrey/vassar sts

var predictionsCT2N = "http://proximobus.appspot.com/agencies/mbta/stops/21772/predictions.json";
	// crosstown 2, to sullivan sq via kendall sq, at amesbury/vassar sts

var predictionsCT2S = "http://proximobus.appspot.com/agencies/mbta/stops/22173/predictions.json";
	// crosstown 2, to ruggles st/northereastern university via fenway, at amesbury st/memorial dr

var elem = '';
var time_elem1 = '';
var time_elem2 = '';
var tone = 0;
var pre_predictions0;
var pre_predictions1;
var pre_predictions2;
var predictions;

function handleAlerts(data) {
    var alerts0 = data.alerts;
    console.log(alerts0);

    if (alerts0.length == 0) {
	elem = '';
	return;
    }

    if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[0].effect_end)) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[0].effect_start) && (alerts0[0].effect_periods[0].effect_end == '')) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[1].effect_end)) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[2].effect_end)) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[3].effect_end)) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[4].effect_end)) {
	elem = '<li><span class="tech-route2-red">' + alerts0[0].header_text + '</span>';}

}

function handlePredictions3(data) {
    pre_predictions0 = data.mode;
    console.log(pre_predictions0);
    pre_predictions1 = pre_predictions0[0].route;
    console.log(pre_predictions1);
    pre_predictions2 = pre_predictions1[0].direction;
    console.log(pre_predictions2);
    predictions = pre_predictions2[0].trip;
    console.log(predictions);

    if (predictions.length == 0) {
        elem = '';
	time_elem0 = '';
	time_elem1 = '';
        return;
    }

    var second = predictions[0].pre_away;
    if (second < 60) {
        time_elem0 = 'Arrv';
    } else {
        time_elem0 = (Math.round(second/60) + 'm ');
    }

    var second = predictions[1].pre_away;
    if (second < 60) {
        time_elem1 = 'Arrv';
    } else {
        time_elem1 = (Math.round(second/60) + 'm ');
    }

    var route = predictions[0].trip_headsign;
    console.log(route);

    elem += ('<li><div class="large-2 columns"><span class="tech-route-red">' + route + '</span></div><div class="large-2 columns"><span class="tech-time">' + time_elem0 + time_elem1 + '</span></div></li>');

    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);
}



function handlePredictions2(data) {
    var predictions = data.items;

    for (var i = 0; i < 2; i++) {
        prediction = predictions[i];

	if (i == 0) {
            elem += '<li><span class="tech-minutes2">';
	} else {
	    elem += '<li><span class="tech-minutes2">';}

        var minutes = prediction.minutes;
        if (minutes == 0) {
            elem += (prediction.is_departing ? "Arrv</span>&nbsp;<span class='tech-route'>" : "Arrv</span>&nbsp;<span class='tech-route'>");
        } else {
            elem += (minutes + '</span>&nbsp;<span class="tech-route">m ');
        }

        var route = '';
        if (prediction.route_id == 'tech') {
            route = 'Tech Shuttle';
        } else if (prediction.route_id == 'saferidecambwest') {
            route = 'Saferide Cambridge';
        } else if (prediction.route_id == 'saferidecamball') {
            route = 'Saferide Cambridge';
        } else if (prediction.route_id == 'traderjwf') {
            route = 'Central/Kendall Sqs';
        } else {
            route = prediction.route_id;
        }
        elem += ('&nbsp;-&nbsp;&nbsp;' + route + '</span></li>');
    }

    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);
}

function handlePredictions1(data) {
    var predictions = data.items;

    for (var i = 0; i < 1; i++) {
        prediction = predictions[i];
        elem += '<li><span class="tech-minutes">';

        var minutes = prediction.minutes;
        if (minutes == 0) {
            elem += (prediction.is_departing ? "Arrv</span>&nbsp;<span class='tech-route'>" : "Arrv</span>&nbsp;<span class='tech-route'>");
        } else {
            elem += (minutes + '</span>&nbsp;<span class="tech-route">m ');
        }

        var route = '';
        if (prediction.route_id == 'saferidebostonall') {
            route = 'ZBT/Packard\'s Corner';
        } else if (prediction.route_id == 'saferidebostonw') {
            route = 'ZBT/Packard\'s Corner';
        } else if (prediction.route_id == '747' && tone == 0) {
            route = 'CT2, Fenway/Northeastern';
	    tone = 1;
        } else if (prediction.route_id == '747' && tone == 1) {
            route = 'CT2, Kendall/Sullivan Sqs';
        } else {
            route = prediction.route_id;
        }
        elem += ('&nbsp;-&nbsp;&nbsp;' + route + '</span></li>');
    }

    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);
}


function getPredictions() {
    $.getJSON(alertsREDsouth, handleAlerts);
    $.getJSON(predictionsREDsouth, handlePredictions3);
    $.getJSON(predictionsREDnorth, handlePredictions3);
    $.getJSON(predictionsTEK, handlePredictions2);
    $.getJSON(predictionsSFBOS, handlePredictions1);
    $.getJSON(predictionsCT2N, handlePredictions1);
    $.getJSON(predictionsCT2S, handlePredictions1);

    if (elem.length == 0) {
	$("#techpanel").slideUp("slow");
    }
};
