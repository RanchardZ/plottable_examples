var data = [
  { x: 1, x2: 3, y: 5, y2: 5 },
  { x: 2, x2: 4, y: 3, y2: 3 },
  { x: 3, x2: 7, y: 1, y2: 1 },
  { x: 4, x2: 6, y: 4, y2: 4 },
  { x: 5, x2: 7, y: 2, y2: 2 },
  { x: 5, x2: 7, y: 5, y2: 5 }
];

var xScale = new Plottable.Scales.Linear();
var yScale = new Plottable.Scales.Linear();

var plot = new Plottable.Plots.Segment()
  .x(function(d) { return d.x; }, xScale)
  .y(function(d) { return d.y; }, yScale)
  .x2(function(d) { return d.x2; })
  .y2(function(d) { return d.y2; })
  .addDataset(new Plottable.Dataset(data))
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  plot.redraw();
});