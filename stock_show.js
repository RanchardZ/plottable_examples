
var xScale = new Plottable.Scales.Time();
var yOpenScale = new Plottable.Scales.Linear();
var yVolumeScale = new Plottable.Scales.Linear();

var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
var yOpenAxis = new Plottable.Axes.Numeric(yOpenScale, "left");
var yVolumeAxis = new Plottable.Axes.Numeric(yVolumeScale, "left");

var xAxisLabel = new Plottable.Components.AxisLabel("Date");
var yOpenLabel = new Plottable.Components.AxisLabel("Open", -90);
var yVolumeLabel = new Plottable.Components.AxisLabel("Volume", -90);

var plot_open = new Plottable.Plots.Bar()
	.x(function(datum) { return datum.Date; }, xScale)
	.y(function(datum) { return datum.open; }, yOpenScale)
	.animated(true)
	.attr("fill", "#0000FF")

var plot_volume = new Plottable.Plots.Area()
	.x(function(datum) { return datum.Date; }, xScale)
	.y(function(datum) { return datum.volume; }, yVolumeScale)
	.animated(true)
	.attr("fill", "#FF0000")

var table = new Plottable.Components.Table([
	[yOpenLabel, yOpenAxis, plot_open],
	[yVolumeLabel, yVolumeAxis, plot_volume],
	[null, null, xAxis],
	[null, null, xAxisLabel]
]);

table.renderTo("svg#example");


function dateTransform(dateString) {
	var dateInt = _.toInteger(dateString);
	var year = dateInt / 10000;
	var month = dateInt % 10000 / 100;
	var day = dateInt % 100;
	return new Date(year, month, day);

}


$.get("http://127.0.0.1:8080/baba.json", function(data) {
	series = data.series;
	_.forEach(series, function(d, i) { series[i].Date = dateTransform(d.Date) })
	console.log(series);
	// console.log(_.pick(series[0], ["Date", "open"]));
	var open_data = [];
	var volume_data = [];
	_.forEach(series, function(d) { open_data.push(_.pick(d, ["Date", "open"])); });
	_.forEach(series, function(d) { volume_data.push(_.pick(d, ["Date", "volume"])); });


	plot_open.addDataset(new Plottable.Dataset(open_data));
	plot_volume.addDataset(new Plottable.Dataset(volume_data));
})