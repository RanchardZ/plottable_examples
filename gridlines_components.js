
var xScale = new Plottable.Scales.Linear().domain([0, 100]);
var yScale = new Plottable.Scales.Linear().domain([0, 100]);
var gridlines = new Plottable.Components.Gridlines(xScale, yScale);
gridlines.renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});