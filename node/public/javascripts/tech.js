var predictionsREDsouth = "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=rx_hA9SfFEOuTpxT4fGKrw&stop=70071&direction=1&format=json"
	// generates predictions for Red Line toward Ashmont or Braintree

var predictionsREDnorth = "http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=rx_hA9SfFEOuTpxT4fGKrw&stop=70072&direction=1&format=json"
	// generates predictions for Red Line toward Alewife

//var alertsREDsouth = "http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=rx_hA9SfFEOuTpxT4fGKrw&route=933_&include_access_alerts=false&include_service_alerts=true&format=json"
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
var redbranch = 0;
var pre_predictions0;
var pre_predictions1;
var pre_predictions2;
var predictions;



function handlePredictions3(data) {
    pre_predictions0 = data.mode;
    pre_predictions1 = pre_predictions0[0].route;
    if (redbranch == 1) {
        pre_predictions2 = pre_predictions1[1].direction;
    } else {
        pre_predictions2 = pre_predictions1[0].direction;
    }
    predictions = pre_predictions2[0].trip;
    time_elem1 = '';
    var route1 = '';

    if (predictions.length == 0) {
	time_elem0 = '';
	time_elem1 = '';
        return;
    }


    var second = predictions[0].pre_away;
    if (second < 60) {
        time_elem0 = ' Arrv';
    } else {
        time_elem0 = (' ' + Math.round(second/60) + 'm ');
    }

    if (predictions.length > 1) {
        var second = predictions[1].pre_away;
        if (second < 60) {
            time_elem1 = ' Arrv';
        } else {
             time_elem1 = (' ' + Math.round(second/60) + 'm ');
        }
	route1 = predictions[1].trip_headsign;
	
    }

    var route = predictions[0].trip_headsign;
    console.log(predictions[0].trip_headsign);

    if (route1 == '') {
	console.log("cond1");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-red">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + ' </span>' + '<span class="tech-next-time"> ' + time_elem1 + 

'</span></div></li>');
    } else if (route != route1) {
	console.log("cond2");
	console.log(route);
	console.log(route1);
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-red">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + '</span></div></li>');
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-red">' + route1 + ' </span><span class="tech-time"> ' + ' ' + time_elem1 + '</span></div></li>');
    } else {
	console.log("cond3");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-red">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + ' </span>' + ' ' + '<span class="tech-next-time"> ' + time_elem1 + 

'</span></div></li>');
    }


    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);
}



function handlePredictions2(data) {
	var predictions = data.items;

	time_elem0 = '';
	time_elem1 = '';

        if (predictions[0].minutes == 0) {
            time_elem0 = (predictions[0].is_departing ? "Arrv " : "Arrv ");
        } else {
            time_elem0 = (predictions[0].minutes + 'm ');
        }

	console.log(time_elem0);
	var route1 = '';

	if (predictions.length > 1) {
		if (predictions[1].minutes == 0) {
        	    time_elem1 = (predictions[1].is_departing ? "Arrv " : "Arrv ");
        	} else {
        	    time_elem1 = (predictions[1].minutes + 'm ');
       		}

        	if (predictions[1].route_id == 'tech') {
        	    route1 = 'Tech Shuttle';
        	} else if (predictions[1].route_id == 'saferidecambwest') {
        	    route1 = 'Cambridge West';
        	} else if (predictions[1].route_id == 'saferidecamball') {
        	    route1 = 'Cambridge All';
        	} else if (predictions[1].route_id == 'traderjwf') {
        	    route1 = 'Trader Joe\'s';
		} else if (predictions[1].route_id == 'saferidebostonall') {
        	    route1 = 'Boston All';
        	} else if (predictions[1].route_id == 'saferidebostonw') {
        	    route1 = 'Boston West';
        	} else if (predictions[1].route_id == '747' && tone == 0) {
        	    route1 = 'CT2 Ruggles St';
		    tone = 1;
        	} else if (predictions[1].route_id == '747' && tone == 1) {
        	    route1 = 'CT2 Sullivan Sq';
        	} else {
	            route1 = predictions[1].route_id;
        	}
	}

        var route = '';
        if (predictions[0].route_id == 'tech') {
            route = 'Tech Shuttle';
        } else if (predictions[0].route_id == 'saferidecambwest') {
            route = 'Cambridge West';
        } else if (predictions[0].route_id == 'saferidecamball') {
            route = 'Cambridge All';
        } else if (predictions[0].route_id == 'traderjwf') {
            route = 'Trader Joe\'s';
	} else if (predictions[0].route_id == 'saferidebostonall') {
            route = 'Boston All';
        } else if (predictions[0].route_id == 'saferidebostonw') {
            route = 'Boston West';
        } else if (predictions[0].route_id == '747' && tone == 0) {
            route = 'CT2 Ruggles St';
	    tone = 1;
        } else if (predictions[0].route_id == '747' && tone == 1) {
            route = 'CT2 Sullivan Sq';
        } else {
            route = predictions[0].route_id;
        }

	console.log(route);
    
    if (route != 'Tech Shuttle') {

    if (route1 == '') {
	console.log("cond1");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + '</span>' + ' ' + '<span class="tech-next-time">' + time_elem1 + 

'</span></div></li>');
    } else if (route != route1) {
	console.log("cond2");
	console.log(route);
	console.log(route1);
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + '</span></div></li>');
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow">' + route1 + ' </span><span class="tech-time"> ' + ' ' + time_elem1 + '</span></div></li>');
    } else {
	console.log("cond3");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow">' + route + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + '</span>' + ' ' + '<span class="tech-next-time">' + time_elem1 + 

'</span></div></li>');
    }

    } else {

    if (route1 == '') {
	console.log("cond1");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow-plus">' + route + ' </span><span class="tech-time-plus"> ' + ' ' + time_elem0 + '</span>' + ' ' + '<span class="tech-next-time-plus">' + time_elem1 

+ '</span></div></li>');
    } else if (route != route1) {
	console.log("cond2");
	console.log(route);
	console.log(route1);
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow-plus">' + route + ' </span><span class="tech-time-plus"> ' + ' ' + time_elem0 + '</span></div></li>');
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow">' + route1 + ' </span><span class="tech-time"> ' + ' ' + time_elem1 + '</span></div></li>');
    } else {
	console.log("cond3");
    elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-yellow-plus">' + route + ' </span><span class="tech-time-plus"> ' + ' ' + time_elem0 + '</span>' + ' ' + '<span class="tech-next-time-plus">' + time_elem1 

+ '</span></div></li>');
    }

    }


    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);
}

function handlePredictions1(data) {

    pre_predictions0 = data.mode;
    pre_predictions1 = pre_predictions0[0].route;
    pre_predictionsASH = pre_predictions1[0].direction;
    pre_predictionsBRT = pre_predictions1[1].direction;
    
    predictionsASH = pre_predictionsASH[0].trip;
    predictionsBRT = pre_predictionsASH[1].trip;
    time_elem1 = '';
    var route1 = '';

    var secASH;
    var secBRT;
    var sec0;
    var sec1;

    if ((predictionsASH.length == 0) && (predictionsBRT.length == 0)) {
	time_elem0 = '';
	time_elem1 = '';
        return;
    } else if ((predictionsASH.length != 0) && (predictionsBRT.length != 0)) {
        secASH = predictionsASH[0].pre_away;
        secBRT = predictionsBRT[0].pre_away;
        sec0 = Math.min(secASH, secBRT);
        sec1 = Math.max(secASH, secBRT);
    } else if ((predictionsASH.length == 0) && (predictionsBRT.length == 1)) {
        secBRT = predictionsBRT[0].pre_away;
        sec0 = secBRT
        sec1 = '';
    } else if ((predictionsASH.length == 0) && (predictionsBRT.length > 1)) {
        secASH = predictionsBRT[0].pre_away;
        secBRT = predictionsBRT[1].pre_away;
        sec0 = Math.min(secASH, secBRT);
        sec1 = Math.max(secASH, secBRT);
    } else if ((predictionsBRT.length == 0) && (predictionsASH.length == 1)) {
        secASH = predictionsASH[0].pre_away;
        sec0 = secASH
        sec1 = '';
    } else if ((predictionsBRT.length == 0) && (predictionsASH.length > 1)) {
        secASH = predictionsASH[0].pre_away;
        secBRT = predictionsASH[1].pre_away;
        sec0 = Math.min(secASH, secBRT);
        sec1 = Math.max(secASH, secBRT);
    }

    
    if (sec0 = '') {
	time_elem0 = '';
    }else if ((sec0 < 60) && (sec0 == sec0)) {
        time_elem0 = ' Arrv';
	route1 = 'Alewife';
    } else {
        time_elem0 = (' ' + Math.round(sec0/60) + 'm ');
	route1 = 'Alewife';
    }

    if (sec1 = '') {
	time_elem1 = '';
    } else if ((sec1 < 60) && (sec1 == sec1)) {
        time_elem1 = ' Arrv';
	route1 = 'Alewife';
    } else {
        time_elem1 = (' ' + Math.round(sec1/60) + 'm ');\
	route1 = 'Alewife';
    }


    console.log(predictions[0].trip_headsign);

    if (route1 == 'Alewife') {
        elem += ('<li><div class="row" style="margin: 15px;"><span class="tech-route-red">' + route1 + ' </span><span class="tech-time"> ' + ' ' + time_elem0 + ' </span>' + '<span class="tech-next-time"> ' + time_elem1 + 

'</span></div></li>');
    }


    $("#techpanel").slideDown("slow");
    $("#predictions").html(elem);

}


function getPredictions() {
    elem = '';
   // $.getJSON(alertsREDsouth, handleAlerts);
    $.getJSON(predictionsREDsouth, handlePredictions3);
    setTimeout(braintree, 1000);
    function braintree() {
        redbranch = 1;
        $.getJSON(predictionsREDsouth, handlePredictions3);
    }
    $.getJSON(predictionsREDnorth, handlePredictions1);
    $.getJSON(predictionsTEK, handlePredictions2);
    $.getJSON(predictionsSFBOS, handlePredictions2);
    tone = 0;
    setTimeout(southtime, 1500);
    function southtime() {
        redbranch = 0;
       	tone = 0;
	$.getJSON(predictionsCT2S, handlePredictions2);
    }
    tone = 1;
    setTimeout(northtime, 3000);
console.log("hi"+elem);
    function northtime() {
	tone = 1;
        $.getJSON(predictionsCT2N, handlePredictions2);    
    }
    setTimeout(rollup, 3000);
    function rollup() {
        if (elem.length == 0) {
	    $("#techpanel").slideUp("slow");
        }
    }


};
