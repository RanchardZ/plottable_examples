var xScale = new Plottable.Scales.Category();
var yScale = new Plottable.Scales.Linear();
var colorScale = new Plottable.Scales.InterpolatedColor();
colorScale.range(["#BDCEF0", "#5279C7"]);

var primaryData = [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 2 },
                   { x: 4, y: 4 }, { x: 5, y: 3 }, { x: 6, y: 5 }];
var secondaryData = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 },
                     { x: 4, y: 1 }, { x: 5, y: 2 }, { x: 6, y: 1 }];

var plot = new Plottable.Plots.StackedBar()
  .addDataset(new Plottable.Dataset(primaryData).metadata(5))
  .addDataset(new Plottable.Dataset(secondaryData).metadata(3))
  .x(function(d) { return d.x; }, xScale)
  .y(function(d) { return d.y; }, yScale)
  .attr("fill", function(d, i, dataset) { return dataset.metadata(); }, colorScale)
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  plot.redraw();
});