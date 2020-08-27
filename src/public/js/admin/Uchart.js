
    var areaChartData = {
        labels  : ['13-8-2020', '11-8-2020', '10-8-2020', '9-8-2020', '8-8-2020', '7-8-2020', '5-8-2020', '4-8-2020', '3-8-2020', '2-8-2020'],
        datasets: [
          {
            label               : 'g01',
            backgroundColor     : 'rgba(60,141,188,0.9)',
            borderColor         : 'rgba(60,141,188,0.8)',
            pointRadius          : false,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : [55.8, 0, 80.79, 57.83, 0, 0, 0, 0, 0, 0]
          },
          {
            label               : 'g02',
            backgroundColor     : 'rgba(210, 214, 222, 1)',
            borderColor         : 'rgba(210, 214, 222, 1)',
            pointRadius         : false,
            pointColor          : 'rgba(210, 214, 222, 1)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : [61.6, 66.32, 67.97,  60.18, 59.48, 57.74, 51.77, 51.7, 52.6, 43.27]
          },
        ]
      }
  
      var barChartCanvas = $('#Vab').get(0).getContext('2d')
      var barChartData = jQuery.extend(true, {}, areaChartData)
      var temp0 = areaChartData.datasets[0]
      var temp1 = areaChartData.datasets[1]
      barChartData.datasets[0] = temp1
      barChartData.datasets[1] = temp0
  
      var barChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        datasetFill             : false
      }
  
      var barChart = new Chart(barChartCanvas, {
        type: 'bar', 
        data: barChartData,
        options: barChartOptions
      })
  