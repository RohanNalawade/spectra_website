import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

Highcharts.setOptions({
    colors: ['#6599FF', '#FF9900', '#009999', '#097054']
});

let options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Compressor usage yesterday across active sites'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Time in Hours'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "ITC",
                    y: 62.74,
                    drilldown: "ITC"
                },
                {
                    name: "Lucious",
                    y: 10.57,
                    drilldown: "Lucious"
                },
                {
                    name: "Akshaykalpa",
                    y: 7.23,
                    drilldown: "Akshaykalpa"
                },
                {
                    name: "Diary",
                    y: 5.58,
                    drilldown: "Diary"
                }
            ]
        }
    ]
};

class BarChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: options,
            seriesData: []
        }
    }

    render() {
        const { options } = this.state;

        return (
            <div>
                <HighchartsReact highcharts={Highcharts} containerProps={{ style: { width: '100%' } }} options={options} />
            </div>

        );
    }
}

export default BarChart;
