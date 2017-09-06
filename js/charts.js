const contextMain = document.getElementById('mainTraffic');
let mainTraffic = new Chart(contextMain, {
  type: 'line',
  data: {
    labels: ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
             '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
    datasets: [{
      label: 'TRAFFIC',
      data: [750, 1250, 1000, 1500, 2000, 1500,
             1750, 1250, 1750, 2250, 1750, 2250],
      borderColor: '#9d97c4',
      borderWidth: 2,
      lineTension: 0,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointBackgroundColor: '#e2d2fa',
      fill: true,
      backgroundColor: 'rgba(164, 151, 247, 0.1)'
    }]
  },
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true,
            drawOnChartArea: true,
            drawTicks: false
          }
        }],
        yAxes: [{
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            min: 500,
            max: 2500,
            stepSize: 500
          }
        }]
      },
      title: {
        display: false,
        text: 'TRAFFIC',
        position: 'top'
      },
      legend: {
        display: false
      },
      layout: {
            padding: 15
        }
    }
});

let contextDaily = document.getElementById('traffic');
let traffic = new Chart(contextDaily, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: '#7733ff',
      barPercentage: 0.5
    }]
  },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true,
            drawTicks: false
          }
        }],
        yAxes: [{
          gridLines: {
            drawTicks: false
          },
          ticks: {
            min: 50,
            max: 250,
            stepSize: 50
          }
        }]
      },
      title: {
        display: false,
        text: 'DAILY TRAFFIC',
        position: 'top'
      },
      legend: {
        display: false
      },
      layout: {
            padding: 15
        }
    }

});

let contextUsers = document.getElementById('mobileUsers');
let mobileUsers = new Chart(contextUsers, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      data: [20, 20, 60],
      backgroundColor: ['#7733ff', '#400080', '#8080ff']
    }]
  },
    options: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15
        }
      },
      title: {
        display: false,
        text: 'MOBILE USER',
        position: 'top'
      },
      layout: {
            padding: 15
        }
    }
});
