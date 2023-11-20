<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
<script>
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['COVID-19', 'Pneumonia', 'TB'],
            datasets: [{
                label: 'Probability',
                data: [{{ covid_prob }}, {{ pneumonia_prob }}, {{ tb_prob }}],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        max: 100
                    }
                }]
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: 'black',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    formatter: function(value, context) {
                        return value + '%';
                    }
                }
            },
            title: {
                display: true,
                text: 'Probability of COVID-19, Pneumonia, and TB'
            },
            legend: {
                display: false
            }
        }
    });
</script>
