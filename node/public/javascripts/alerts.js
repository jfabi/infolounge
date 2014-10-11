var alertsURL = '/alerts.json';

var alertsREDsouth = "http://realtime.mbta.com/developer/api/v2/alertsbyroute?api_key=rx_hA9SfFEOuTpxT4fGKrw&route=933_&include_access_alerts=false&include_service_alerts=true&format=json"
	// alert messages for Southbound Red Line

function previousGetAlerts() {
    $.getJSON(alertsURL, function(data) {
        if (jQuery.isEmptyObject(data)) {
            $("#alertspanel").slideUp("slow");
            return;
        }

        $("#alertspanel").slideDown("slow");

        var elemt = '';
        for (var type in data) {
            elemt += ('<li><span class="foodtype">' + type + '</span> ' + data[type] + '</li>');
        }
        $("#alerts").html(elemt);
    });
};

function handleAlerts(data) {

    var alerts0 = data.alerts;


    if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[0].effect_end)) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[0].effect_start) && (alerts0[0].effect_periods[0].effect_end == '')) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[1].effect_end)) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[2].effect_end)) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[3].effect_end)) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[0].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[0].effect_periods[4].effect_end)) {
	elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';}
    } else if (alerts0.length > 1) {
	    if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[1].effect_periods[0].effect_end)) {
		elemt = '<span class="tech-alert">' + alerts0[1].header_text + '</span>';
	    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[0].effect_start) && (alerts0[1].effect_periods[0].effect_end == '')) {
		elemt = '<span class="tech-alert">' + alerts0[1].header_text + '</span>';
	    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[1].effect_periods[1].effect_end)) {
		elemt = '<span class="tech-alert">' + alerts0[1].header_text + '</span>';
	    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[1].effect_periods[2].effect_end)) {
		elemt = '<span class="tech-alert">' + alerts0[0].header_text + '</span>';
	    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[1].effect_periods[3].effect_end)) {
		elemt = '<span class="tech-alert">' + alerts0[1].header_text + '</span>';
	    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[1].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[1].effect_periods[4].effect_end)) {
		elemt = '<span class="tech-alert">' + alerts0[1].header_text + '</span>';}
	    } else if (alerts0.length > 2) {
	    	if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[2].effect_periods[0].effect_end)) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';
		    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[0].effect_start) && (alerts0[2].effect_periods[0].effect_end == '')) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';
		    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[2].effect_periods[1].effect_end)) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';
		    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[2].effect_periods[2].effect_end)) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';
		    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[2].effect_periods[3].effect_end)) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';
		    } else if ((Math.round(new Date().getTime()/1000.0) > alerts0[2].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[2].effect_periods[4].effect_end)) {
			elemt = '<span class="tech-alert">' + alerts0[2].header_text + '</span>';}
		    } else if (alerts0.length > 3) {
	    		if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[3].effect_periods[0].effect_end)) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';
		   	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[0].effect_start) && (alerts0[2].effect_periods[0].effect_end == '')) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';
			} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[3].effect_periods[1].effect_end)) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';
	       	 	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[3].effect_periods[2].effect_end)) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';
		    	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[3].effect_periods[3].effect_end)) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';
		    	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[3].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[3].effect_periods[4].effect_end)) {
				elemt = '<span class="tech-alert">' + alerts0[3].header_text + '</span>';}
		        } else if (alerts0.length > 4) {
	    			if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[0].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[4].effect_periods[0].effect_end)) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';
			   	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[0].effect_start) && (alerts0[4].effect_periods[0].effect_end == '')) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';
				} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[1].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[4].effect_periods[1].effect_end)) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';
		       	 	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[2].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[4].effect_periods[2].effect_end)) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';
			    	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[3].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[4].effect_periods[3].effect_end)) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';
			    	} else if ((Math.round(new Date().getTime()/1000.0) > alerts0[4].effect_periods[4].effect_start) && (Math.round(new Date().getTime()/1000.0) < alerts0[4].effect_periods[4].effect_end)) {
					elemt = '<span class="tech-alert">' + alerts0[4].header_text + '</span>';}
				}

console.log(elemt);

    $("#alertspanel").slideDown("slow");
    $("#alerts").html(elemt);
}

function getAlerts() {
    elemt = '';
    $.getJSON(alertsREDsouth, handleAlerts);
    setTimeout(rollup, 1500);
    function rollup() {
        if (elemt.length == 0) {
	    $("#alertspanel").slideUp("slow");
        }
    }
}
