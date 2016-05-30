'use strict';

function App() {

    // Add the navigation with the tabs
    $('#nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // do the things for the data-tables
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    '1) Land- und forstwirtschaftliche Berufe, Berufe der Tierzucht',
                    '2) Produktionsberufe in der Industrie und im Gewerbe (ohne Bau)',
                    '3) Technische Berufe sowie Informatikberufe',
                    '4) Berufe des Bau- und Ausbaugewerbes und des Bergbaus',
                    '5) Handels- und Verkehrsberufe',
                    '6) Berufe des Gastgewerbes und Berufe zur Erbringung persönlicher Dienstleistungen',
                    '7) Berufe des Managements und der Administration, des Bank- und Versicherungsgewerbes und des Rechtswesens',
                    '8) Gesundheits-, Lehr- und Kulturberufe, Wissenschaftler',
                    '9) Nicht klassierbare Angaben'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Erwerbstätige (%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '1970',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]

            }, {
                name: '1980',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2]

            }, {
                name: '1990',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4]

            }, {
                name: '2000',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6]
            }, {
                name: '2010',
                data: []
            }, {
                name: '2014',
                data: []
            }]
        });
    });
}

App();