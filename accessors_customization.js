// Format: { "x": 1, "y": 1, "radius": 1, "stroke": "#FF0000" }
var data = [];
var colors = ["#C7254E", "#009CDE"];
for (var i = 2; i < 10; i++) {
  data.push({ "x": i, "y": i, "radius": Math.pow(i, 2), "stroke": colors[i % colors.length] });
}

var xScale = new Plottable.Scales.Linear();
var yScale = new Plottable.Scales.Linear();

var plot = new Plottable.Plots.Scatter()
	.x(function(d) { return d.x; }, xScale)
	.y(function(d) { return d.y; }, yScale)
	.addDataset(new Plottable.Dataset(data))
	.size(function(d) { return d.radius; })
	.attr("stroke", function(d){ return d.stroke; })
	.attr("stroke-width", 3);

plot.renderTo("svg#example");