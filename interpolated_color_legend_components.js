var colorScale = new Plottable.Scales.InterpolatedColor();
colorScale.range(["#BDCEF0", "#5279C7"]);
var legend = new Plottable.Components.InterpolatedColorLegend(colorScale);
colorScale.domain([0, 100]);
legend.xAlignment("center");
legend.yAlignment("center");
legend.renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});