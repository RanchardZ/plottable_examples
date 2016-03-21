
var scale = new Plottable.Scales.Linear();
var colorScale = new Plottable.Scales.InterpolatedColor();

colorScale.range(["#BDCEF0", "#5279C7"]);
var data = [{ val: 1 }, { val: 2 }, { val: 3 },
            { val: 4 }, { val: 5 }, { val: 6 }];

var plot = new Plottable.Plots.Pie()
	.addDataset(new Plottable.Dataset(data))
	.sectorValue(function(d) { return d.val; }, scale)
	.attr("fill", function(d) { return d.val; }, colorScale)
	.renderTo("svg#example")

window.addEventListener("resize", function() {
  plot.redraw();
});