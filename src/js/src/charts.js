/* eslint-disable object-curly-newline */
/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.12): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// random Numbers
var randomDataPoints = function(labels) {
  var dps = [];  
  for(var i = 0; i < labels.length; i++)
	  dps.push({label: labels[i], y: Math.round(Math.random() * 100)});
  return dps;
} // eslint-disable-next-line no-unused-vars

var axisStyle = {
	lineThickness: 1,
	lineColor: 'rgba(220, 220, 220, 1)',
	tickThickness: 1,
	tickColor: 'rgba(220, 220, 220, 1)',
	gridThickness: 1,
	gridColor: 'rgba(220, 220, 220, 1)'
};
var lineChart = new CanvasJS.Chart('canvas-1', {
  axisX: axisStyle,
  axisY: axisStyle,
  legend: {
	  verticalAlign: 'top',
  },
  data: [{
	type: 'spline',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My First dataset',
	color: 'rgba(220, 220, 220, 1)',
	fillOpacity: 0.2,
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  },{
	type: 'spline',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My Second dataset',
	color:  'rgba(151, 187, 205, 1)',	
	fillOpacity: 0.2,
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  }]
});// eslint-disable-next-line no-unused-vars
lineChart.render();

var columnChart = new CanvasJS.Chart('canvas-2', {
  axisX: axisStyle,
  axisY: axisStyle,
  legend: {
	  verticalAlign: 'top',
  },
  data: [{
	type: 'column',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My First dataset',
	color: 'rgba(220, 220, 220, 1)',
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  },{
	type: 'column',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My Second dataset',
	color:  'rgba(151, 187, 205, 1)',
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  }]
}); // eslint-disable-next-line no-unused-vars
columnChart.render();

var doughnutChart = new CanvasJS.Chart('canvas-3', {
	legend: {
		verticalAlign: 'top',
	},
	data: [{
	type: 'doughnut',	
	color:  'rgba(151, 187, 205, 1)',
	showInLegend: true,
	legendMarkerType: 'square',
	dataPoints: [
		{ name: 'Pink', y: 300, color: '#FF6384' }, 
		{ name: 'Blue', y: 50, color: '#36A2EB' },
		{ name: 'Yellow', y: 100, color: '#FFCE56' }
	]
  }]
}); // eslint-disable-next-line no-unused-vars
doughnutChart.render();

var areaChart = new CanvasJS.Chart('canvas-4', {
  axisX: axisStyle,
  axisY: axisStyle,
  legend: {
	  verticalAlign: 'top',
  },
  data: [{
	type: 'splineArea',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My First dataset',
	color: 'rgba(220, 220, 220, 1)',
	fillOpacity: 0.2,
	dataPoints: randomDataPoints(['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'])
  },{
	type: 'splineArea',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My Second dataset',
	color:  'rgba(151, 187, 205, 1)',	
	fillOpacity: 0.2,
	dataPoints: randomDataPoints(['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'])
  }]
}); // eslint-disable-next-line no-unused-vars
areaChart.render();

var barChart = new CanvasJS.Chart('canvas-5', {
  axisX: axisStyle,
  axisY: axisStyle,
  legend: {
	  verticalAlign: 'top',
  },
  data: [{
	type: 'bar',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My First dataset',
	color: 'rgba(220, 220, 220, 1)',
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  },{
	type: 'bar',
	showInLegend: true,
	legendMarkerType: 'square',
	name: 'My Second dataset',
	color:  'rgba(151, 187, 205, 1)',
	dataPoints: randomDataPoints(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  }]
}); // eslint-disable-next-line no-unused-vars
barChart.render();

var pieChart = new CanvasJS.Chart('canvas-6', {
	legend: {
		verticalAlign: 'top',
	},
  	data: [{
	type: 'pie',
	showInLegend: true,
	legendMarkerType: 'square',
	dataPoints: [
		{ name: 'Pink', y: 300, color: '#FF6384' }, 
		{ name: 'Blue', y: 50, color: '#36A2EB' },
		{ name: 'Yellow', y: 100, color: '#FFCE56' }
	]
  }]
}); // eslint-disable-next-line no-unused-vars
pieChart.render();

//# sourceMappingURL=charts.js.map