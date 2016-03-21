var xScale = new Plottable.Scales.Category();
var yScale = new Plottable.Scales.Category();
var colorScale = new Plottable.Scales.InterpolatedColor();
colorScale.range(["#BDCEF0", "#5279C7"]);
var data = [
  { x: 1, y: 1, val: 2 }, { x: 1, y: 2, val: 1 }, { x: 1, y: 3, val: 3 },
  { x: 2, y: 1, val: 3 }, { x: 2, y: 2, val: 2 }, { x: 2, y: 3, val: 1 },
  { x: 3, y: 1, val: 1 }, { x: 3, y: 2, val: 3 }, { x: 3, y: 3, val: 2 }
]

var plot = new Plottable.Plots.Rectangle()
  .addDataset(new Plottable.Dataset(data))
  .x(function(d) { return d.x; }, xScale)
  .y(function(d) { return d.y; }, yScale)
  .attr("fill", function(d) { return d.val; }, colorScale)
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  plot.redraw();
});