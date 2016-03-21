var data = [
 { hoursStudied: 1, testScore: 1 },
 { hoursStudied: 2, testScore: 3 },
 { hoursStudied: 3, testScore: 2 },
 { hoursStudied: 4, testScore: 4 },
 { hoursStudied: 5, testScore: 3 },
 { hoursStudied: 6, testScore: 5 }
];

var studentData = [
  { hoursStudied: 1, students: 10 },
  { hoursStudied: 2, students: 12 },
  { hoursStudied: 3, students: 15 },
  { hoursStudied: 4, students: 7 },
  { hoursStudied: 5, students: 3 },
  { hoursStudied: 6, students: 2 }
];

var dataSet = new Plottable.Dataset(data, { name: "Test Scores" }); // the {name: "Test Scores"} is the metadata
var studentDataSet = new Plottable.Dataset(data, { name: "Students" });

var xScale = new Plottable.Scales.Category();
var yScale = new Plottable.Scales.Linear();
var yStudentsScale = new Plottable.Scales.Linear();


var plot = new Plottable.Plots.Line();
plot.addDataset(dataSet);
plot.x(function(datum, index, dataset) { return datum.hoursStudied; }, xScale);
plot.y(function(datum, index, dataset) { return datum.testScore; }, yScale);

var barPlot = new Plottable.Plots.Bar();
barPlot.addDataset(studentDataSet);
barPlot.x(function(d) { return d.hoursStudied; }, xScale);
barPlot.y(function(d) { return d.students; }, yStudentsScale);
barPlot.attr('opacity', 0.3);

var xLabel = new Plottable.Components.AxisLabel("Hours Studied");
var yLabel = new Plottable.Components.AxisLabel(dataSet.metadata().name, 270);
var yStudentsLabel = new Plottable.Components.AxisLabel(studentDataSet.metadata().name, 270)

var xAxis = new Plottable.Axes.Category(xScale, "bottom");
var yAxis = new Plottable.Axes.Numeric(yScale, "left");
var yStudentsAxis = new Plottable.Axes.Numeric(yStudentsScale, "left");

// var table = new Plottable.Components.Table([
// 	[yLabel, yAxis, plot],
// 	[null, null, xAxis],
// 	[null, null, xLabel]
// ]);

// table.renderTo("svg#example");

var group = new Plottable.Components.Group([ barPlot, plot ]);
// since this group is just another component, we can put it in our existing Table
var table = new Plottable.Components.Table([
	[yLabel, yAxis, group, yStudentsAxis, yStudentsLabel],
	[null, null, xAxis, null, null],
	[null, null, xLabel, null, null]
]);

table.renderTo("svg#example");
