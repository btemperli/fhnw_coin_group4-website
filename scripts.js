'use strict';

function App() {

    // Add the navigation with the tabs
    $('#nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // do the things for the data-tables
    $(function () {
        $('#container-erwerb').highcharts({
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
                    '6) Berufe des Gastgewerbes und Berufe zur Erbringung persoenlicher Dienstleistungen',
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
                    text: 'Erwerbstaetige (%)'
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

    $(function () {
        $('#container-student').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Studenten: Abschluesse FH'
            },
            subtitle: {
                text: 'Quelle: Bundesamt fuer Statistik'
            },
            xAxis: {
                categories: [
                    'Architektur, Bau- und Planungsw.',
                    'Technik und IT',
                    'Chemie und Life Sciences',
                    'Land- und Forstwirtschaft',
                    'Wirtschaft und Dienstleistungen',
                    'Design',
                    'Sport',
                    'Musik, Theater und andere Künste',
                    'Angewandte Linguistik',
                    'Soziale Arbeit',
                    'Angewandte Psychologie',
                    'Gesundheit',
                    'Lehrfrachkraefteausbildung'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Studenten (%)'
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
                name: '1997/98',
                data: [
                    14.4585726,
                    41.30434783,
                    4.655455291,
                    1.866283839,
                    30.70139459,
                    5.106644791,
                    0,
                    0,
                    0,
                    1.907301066,
                    0,
                    0,
                    0
                ]

            }, {
                name: '2000/01',
                data: [
                    9.560699964,
                    31.26139264,
                    3.518045935,
                    1.344331024,
                    30.09022968,
                    5.637076194,
                    0.159496901,
                    10.24425811,
                    0.578745899,
                    6.726212176,
                    0.692672257,
                    0.186839227,
                    0
                ]

            }, {
                name: '2005/06',
                data: [
                    5.670413697,
                    18.49689364,
                    2.744820994,
                    0.766721383,
                    23.79953041,
                    4.438257111,
                    0.157915515,
                    8.674964157,
                    0.552704303,
                    9.15494421,
                    0.760487876,
                    3.251812912,
                    21.5305338
                ]

            }, {
                name: '2010/11',
                data: [
                    5.005846568,
                    13.82898418,
                    3.242995219,
                    0.597978123,
                    25.6553337,
                    4.144402836,
                    0.179097408,
                    7.958733589,
                    0.648303015,
                    9.492162638,
                    0.865884164,
                    7.772235461,
                    20.6080431
                ]
            }, {
                name: '2014/15',
                data: [
                    5.007668525,
                    13.6901429,
                    2.867784892,
                    0.578182438,
                    25.16371692,
                    3.464225722,
                    0.223969618,
                    7.32891886,
                    0.486890474,
                    8.774983567,
                    1.012732186,
                    8.174891058,
                    23.22589284
                ]
            }, {
                name: '2015/16',
                data: [
                    4.930631682,
                    13.96324717,
                    2.779447647,
                    0.595259144,
                    25.07396537,
                    3.401817603,
                    0.194490611,
                    7.203225008,
                    0.517462899,
                    8.642455532,
                    1.073823921,
                    8.358381367,
                    23.27640063
                ]
            }]
        });
    });
}

App();