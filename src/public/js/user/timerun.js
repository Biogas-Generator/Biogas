am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("pressurechart", am4charts.XYChart);
  let angrychartdata = [
    {"pressure":0,"date":"12:10"},
    {"pressure":1,"date":"12:10"},
    {"pressure":1,"date":"12:20"},
    {"pressure":0,"date":"12:20"},
    {"pressure":0,"date":"12:30"},
    {"pressure":1,"date":"12:30"},
    {"pressure":1,"date":"12:50"},
  ];
  chart.data = angrychartdata;
  //socket.on('temperchart', (data) => {
  //  angrychartdata.push(data);
    
    //console.log(chart.data);
  //});
  
  
  chart.dateFormatter.inputDateFormat = "HH:mm";
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 100;
  dateAxis.startLocation = 0.5;
  dateAxis.endLocation = 0.5;
  dateAxis.baseInterval = {
    timeUnit: "date",
    count: 1
  }
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.disabled = true;
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.dateX = "date";
  series.name = "pressure";
  series.dataFields.valueY = "pressure";
  series.tooltipText = "[#000]{valueY.value}[/]";
  series.tooltip.background.fill = am4core.color("#FFF");
  series.tooltip.getStrokeFromObject = true;
  series.tooltip.background.strokeWidth = 3;
  series.tooltip.getFillFromObject = false;
  series.fillOpacity = 0.6;
  series.strokeWidth = 1;
  series.stacked = true;
  
  
  
  chart.cursor = new am4charts.XYCursor();
  // Add a legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  
  }); // end am4core.ready()