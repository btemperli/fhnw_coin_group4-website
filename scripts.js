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
                text: 'Erwerbstaetige'
            },
            subtitle: {
                text: 'Quelle: Bundesamt fuer Statistik'
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
                    '9) Nicht klassierbare Angaben',
                    '10) unbekannte Berufe'
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
                data: [
                    8.163719772,
                    27.4184708,
                    7.064667516,
                    6.088744574,
                    14.54642679,
                    9.729748746,
                    16.47980327,
                    7.072160814,
                    0.043728496,
                    3.392529217
                ]

            }, {
                name: '1980',
                data: [
                    6.60136114,
                    21.71264445,
                    7.960378693,
                    6.541996563,
                    14.74562852,
                    9.637849129,
                    19.20430578,
                    10.95849196,
                    0.029210606,
                    2.608133149
                ]

            }, {
                name: '1990',
                data: [
                    4.397903309,
                    13.89017098,
                    7.648825117,
                    6.066717925,
                    14.04853767,
                    7.81126434,
                    20.74603621,
                    12.5373099,
                    0.364390688,
                    12.48884386
                ]

            }, {
                name: '2000',
                data: [
                    2.654079661,
                    9.032041535,
                    6.733660232,
                    4.117056365,
                    11.62540398,
                    6.441601026,
                    18.29874909,
                    13.24174192,
                    0.471128091,
                    27.3845381
                ]
            }, {
                name: '2010',
                data: [
                    2.786199834,
                    9.423923463,
                    8.797820982,
                    5.10874211,
                    13.90501465,
                    9.13263572,
                    23.09775173,
                    18.39430211,
                    4.54105426,
                    4.81255515
                ]
            }, {
                name: '2014',
                data: [
                    2.765080167,
                    8.998145598,
                    9.568255197,
                    4.996406985,
                    13.24283678,
                    9.129942853,
                    23.5485876,
                    19.57114726,
                    4.065925475,
                    4.113664833
                ]
            }]
        });
    });
}

App();