var scale = new Plottable.Scales.Time()
  .domain([new Date(2015, 0, 1), new Date(2015, 11, 31)]);
var axis = new Plottable.Axes.Time(scale, "bottom")
  .yAlignment("center")
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});