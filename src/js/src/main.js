/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.12): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
var hiddenAxis = {
	tickLength: 0,
	gridThickness: 0,
	lineThickness: 0,
	includeZero: false,	
	labelFormatter: function(e) {
		return "";
	}
};
var fontFamily = '-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji';

var generateDataPoints = function(labels, yValues) {
	var dps = [];
	for(var i = 0; i < labels.length; i++) {
		dps.push({ label: labels[i], y: yValues[i]});
	}
	return dps;
}
var cardChart1 = new CanvasJS.Chart('card-chart1', {  
  backgroundColor: "transparent",
  animationEnabled: true,
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'spline',
	color: 'rgba(255,255,255,.55)',
	dataPoints: generateDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'], [65, 59, 84, 84, 51, 55, 40])
  }]
}); // eslint-disable-next-line no-unused-vars
cardChart1.render();

var cardChart2 = new CanvasJS.Chart('card-chart2', {
  backgroundColor: "transparent",
  animationEnabled: true,
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'line',
	color: 'rgba(255,255,255,.55)',
	dataPoints: generateDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'], [1, 18, 9, 17, 34, 22, 11])
  }]
}); // eslint-disable-next-line no-unused-vars
cardChart2.render();

var cardChart3 = new CanvasJS.Chart('card-chart3', {
  backgroundColor: 'transparent',
  animationEnabled: true,
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'spline',
	color: 'rgba(255,255,255,.55)',
	dataPoints: generateDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'], [78, 81, 80, 45, 34, 12, 40])
  }]
}); // eslint-disable-next-line no-unused-vars
cardChart3.render();

var cardChart4 = new CanvasJS.Chart('card-chart4', {
  backgroundColor: 'transparent',
  colorSet: 'colorSet2',
  animationEnabled: true,
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'column',
	color: 'rgba(255,255,255,.55)',
	dataPoints: generateDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],  [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82])
  }]
}); // eslint-disable-next-line no-unused-vars
cardChart4.render();

var mainChart = new CanvasJS.Chart('main-chart', {
  axisX: {		
	lineColor: '#c8ced3',	
	tickColor: '#c8ced3',	
	minimum: 0,
	maximum: 27,
	interval: 1,
	labelFontFamily: fontFamily
  },
  axisY: {
	lineColor: '#c8ced3',
	gridColor: '#c8ced3',	
	tickColor: '#c8ced3',
	includeZero: false,
	maximum: 250,
	interval: 50,
	stripLines: [{
		value: 65,
		lineDashType: "dash",
		showOnTop: true
	}],
	labelFontFamily: fontFamily,
  },
  data: [{
	type: 'splineArea',
	color: "#63c2de",
	markerSize: 0,
	fillOpacity: 0.2,
	dataPoints: generateDataPoints(['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'], [165, 180, 70, 69, 77, 57, 125, 165, 172, 91, 173, 138, 155, 89, 50, 161, 65, 163, 160, 103, 114, 185, 125, 196, 183, 64, 137, 95, 112, 175])
  },{
	type: "spline",
	color: "#4dbd74",
	markerSize: 0,
	dataPoints: generateDataPoints(['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'], [92, 97, 80, 100, 86, 97, 83, 98, 87, 98, 93, 83, 87, 98, 96, 84, 91, 97, 88, 86, 94, 86, 95, 91, 98, 91, 92, 80, 83, 82])
  }]
});
mainChart.render();

var brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var brandBoxChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  } // eslint-disable-next-line no-unused-vars

};
var brandBoxChart1 = new CanvasJS.Chart('social-box-chart-1', {
  backgroundColor: 'transparent',
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'splineArea',
	markerSize: 0,
	color: 'rgba(255,255,255,.55)',
	fillOpacity: .2,
	dataPoints: generateDataPoints(brandBoxChartLabels, [65, 59, 84, 84, 51, 55, 40])
  }]  
}); // eslint-disable-next-line no-unused-vars
brandBoxChart1.render();

var brandBoxChart2 = new CanvasJS.Chart('social-box-chart-2', {
  backgroundColor: 'transparent',
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'splineArea',
	markerSize: 0,
	color: 'rgba(255,255,255,.55)',
	fillOpacity: .2,
	dataPoints: generateDataPoints(brandBoxChartLabels, [1, 13, 9, 17, 34, 41, 38])
  }]  
}); // eslint-disable-next-line no-unused-vars
brandBoxChart2.render();

var brandBoxChart3 = new CanvasJS.Chart('social-box-chart-3', {
  backgroundColor: 'transparent',
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'splineArea',
	markerSize: 0,
	color: 'rgba(255,255,255,.55)',
	fillOpacity: .2,
	dataPoints: generateDataPoints(brandBoxChartLabels, [78, 81, 80, 45, 34, 12, 40])
  }]  
}); // eslint-disable-next-line no-unused-vars
brandBoxChart3.render();

var brandBoxChart4 = new CanvasJS.Chart('social-box-chart-4', {
  backgroundColor: 'transparent',
  axisX: hiddenAxis,
  axisY: hiddenAxis,
  data: [{
	type: 'splineArea',
	markerSize: 0,
	color: 'rgba(255,255,255,.55)',
	fillOpacity: .2,
	dataPoints: generateDataPoints(brandBoxChartLabels, [35, 23, 56, 22, 97, 23, 64])
  }]  
}); // eslint-disable-next-line no-unused-vars
brandBoxChart4.render();
//# sourceMappingURL=main.js.map