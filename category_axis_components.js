var scale = new Plottable.Scales.Category()
	.domain(["First", "Second", "Third"])

var axis = new Plottable.Axes.Category(scale, "bottom")
	.yAlignment("center")
	.renderTo("svg#example");

window.addEventListener("resize", function() {
  axis.redraw();
});