var scale = new Plottable.Scales.Linear();
var axis = new Plottable.Axes.Numeric(scale, "bottom")
  .yAlignment("center")
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});