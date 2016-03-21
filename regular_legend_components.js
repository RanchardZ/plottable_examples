var colorScale = new Plottable.Scales.Color();
var legend = new Plottable.Components.Legend(colorScale);
colorScale.domain(["First", "Second"]);
legend.xAlignment("center");
legend.yAlignment("center");
legend.renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});