

var xScale = new Plottable.Scales.Linear();
var yScale = new Plottable.Scales.Linear();

var data = [];

_.range(1, 9).forEach(function(value) {
	data.push({"x": value, "y": value})
});

var plot = new Plottable.Plots.Bar()
	.x(function(d) { return d.x; }, xScale)
	.y(function(d) { return d.y; }, yScale)
	.addDataset(new Plottable.Dataset(data))

var interaction = new Plottable.Interactions.Click();


function onClickInteraction(point) {
	// Reset all the colors to blue
	plot.selections().attr("fill", "#5279c7");

	// Retrieve the d3 selection for the clicked point
	var selection = plot.entitiesAt(point)[0].selection;

	// Set the fill for the d3 selection to orange
	selection.attr("fill", "#F99D42");
}

interaction.onClick(onClickInteraction);
interaction.attachTo(plot);
plot.renderTo("svg#example");