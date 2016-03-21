new Plottable.Components.AxisLabel("Hello World!")
  .yAlignment("center")
  .renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});