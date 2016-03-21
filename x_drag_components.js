var xScale = new Plottable.Scales.Linear();
var yScale = new Plottable.Scales.Linear();
var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
var yAxis = new Plottable.Axes.Numeric(yScale, "left");

var data = [];
for (var i = 0; i < 50; i++) { data.push({"x": i, "y": Math.random()}); }

var plot = new Plottable.Plots.Bar()
  .x(function(d) { return d.x; }, xScale)
  .y(function(d) { return d.y; }, yScale)
  .addDataset(new Plottable.Dataset(data));

var dragbox = new Plottable.Components.XDragBoxLayer();
dragbox.onDrag(function(box) {
  plot.selections().attr("fill", "#5279c7");
  plot.entitiesIn(box).forEach(function(entity) {
    d3.select(entity.selection[0][0]).attr("fill", "#FD373E");
  });
});

new Plottable.Components.Table([
  [yAxis, new Plottable.Components.Group([dragbox, plot])],
  [null, xAxis]
]).renderTo("svg#example");