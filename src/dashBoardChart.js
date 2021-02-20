import React  from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './css/firstPage.css'

Highcharts.setOptions({
    colors: ['#36a2eb', '#f90']
});

class DashBoardChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {}
        }
    }

    componentDidMount() {
        let options = {
            chart: {
                renderTo: 'container',
                type: 'pie',
                height: 100,
                width: 100,
                backgroundColor: '#fff',
                borderColor: null,
                margin: [0, 0, 0, 0],
                maxPadding: 0,
                spacing: [0, 0, 0, 0],
            },
            plotOptions: {
                pie: {
                    size: '100%',
                    color: ['red', 'blue'],
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                },
            },
            title: {
                verticalAlign: 'middle',
                text: ''
            },
            yAxis: {
                title: {
                    text: '10',
                },
                minPadding: 0,
                maxPadding: 0
            },
            xAxis: {
                gridLineColor: 'transparent',
                gridLineWidth: 0,
                lineColor: 'transparent',
                lineWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    enabled: false
                },
                tickWidth: 0,
                minPadding: 0,
                maxPadding: 0,
                borderWidth: 0,
                min: 0.5,
                max: 5.5
            },

            tooltip: {
                formatter: function () {
                    return (
                        '<b>' + this.point.name + ' </b> <br/> ' + Math.round(this.y) + ' %'
                    );
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Browsers',
                data: [
                    {
                        name: "Service",
                        y: 1,
                        drilldown: "Service"
                    },
                    {
                        name: "Installation/Demo",
                        y: 2,
                        drilldown: "Installation/Demo"
                    },

                ],
                size: '120%',
                innerSize: '60%',
                showInLegend: false,
                groupPadding: 0,
                dataLabels: {
                    enabled: false
                }
            }]
        }

        this.setState({
            options: options
        })

    }

    render() {
        return (
            <div className="card-container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mt-3 mb-2">
                                <div className="field-name-active">Sending</div>
                                <div className="field-data-active">65</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mt-3 mb-2">
                                <div className="field-name-active" style={{ background: '#ff9900' }}>Not Sending</div>
                                <div className="field-data-active" style={{ color: '#ff9900' }}>65</div>
                            </div>
                        </div>
                    </div>
                    <HighchartsReact containerProps={{ style: { width: '100px', height: '100px', marginLeft: 'auto', marginRight: 'auto', overFlow: 'visible !important' } }} highcharts={Highcharts} options={this.state.options} />
                </div>
                <div className="name-spacing">{this.props.name}</div>
            </div>
        )
    }

}
export default DashBoardChart;