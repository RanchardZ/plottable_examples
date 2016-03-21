var data = [];
var dataFactor = 1000000;
var dataStartOffset = 50000000;
for (var i = 0; i < 200; i++) {
  data[i] = {x: new Date(i * dataFactor + dataStartOffset), y: i};
}

var data2 = [];
var data2Factor = 1500000;
var data2StartOffset = 100000000;
for (i = 0; i < 200; i++) {
  data2[i] = {x: new Date(i * data2Factor + data2StartOffset), y: 2 * i};
}

var xScale = new Plottable.Scales.Time();
var xScale2 = new Plottable.Scales.Time();
var yScale = new Plottable.Scales.Linear().domainMin(0);

var plot = new Plottable.Plots.Line();
plot.addDataset(new Plottable.Dataset(data))
	.x(function(d) { return d.x; }, xScale)
	.y(function(d) { return d.y; }, yScale)
	.attr("stroke", "blue");

var plot2 = new Plottable.Plots.Line();
plot2.addDataset(new Plottable.Dataset(data2))
	.x(function(d) { return d.x; }, xScale2)
	.y(function(d) { return d.y; }, yScale)
	.attr("stroke", "red");

var plotGroup = new Plottable.Components.Group([plot, plot2]);

var xAxis = new Plottable.Axes.Time(xScale, "bottom");
var xAxis2 = new Plottable.Axes.Time(xScale2, "bottom");
var yAxis = new Plottable.Axes.Numeric(yScale, "left");

var pzi = new Plottable.Interactions.PanZoom();
pzi.addXScale(xScale);
pzi.addXScale(xScale2);
pzi.addYScale(yScale);
pzi.attachTo(plot);

var pziXAxis = new Plottable.Interactions.PanZoom();
pziXAxis.addXScale(xScale);
pziXAxis.attachTo(xAxis);

var pziXAxis2 = new Plottable.Interactions.PanZoom();
pziXAxis2.addXScale(xScale2);
pziXAxis2.attachTo(xAxis2);

var pziYAxis = new Plottable.Interactions.PanZoom();
pziYAxis.addYScale(yScale);
pziYAxis.attachTo(yAxis);

new Plottable.Components.Table([[yAxis, plotGroup], [null, xAxis], [null, xAxis2]]).renderTo("svg#example");

$("#pan-zoom-buttons li").on("click", function(event) {
  event.preventDefault();

  $("#pan-zoom-buttons li").removeClass("selected");
  var id = $(this).attr("id");
  if (id == "pan-zoom-x") {
    pzi.xScales([xScale, xScale2]);
    pzi.yScales([]);
    pziXAxis.enabled(true);
    pziXAxis2.enabled(true);
    pziYAxis.enabled(false);
  } else if (id == "pan-zoom-y") {
    pzi.xScales([]);
    pzi.yScales([yScale]);
    pziXAxis.enabled(false);
    pziXAxis2.enabled(false);
    pziYAxis.enabled(true);
  } else {
    pzi.xScales([xScale, xScale2]);
    pzi.yScales([yScale]);
    pziXAxis.enabled(true);
    pziXAxis2.enabled(true);
    pziYAxis.enabled(true);
  }
  $(this).addClass("selected");
});