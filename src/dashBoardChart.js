import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './css/firstPage.css'
import { CardField } from 'reactstrap';
Highcharts.setOptions({
    colors: ['#6599FF', '#FF9900', '#009999', '#097054']
});

// const options = {
//     chart: {
//         height: '350',
//         type: 'pie',
//         style: {
//             fontFamily: 'Heebo',
//         },
//         backgroundColor: '#fff',
//         borderColor: null,
//     },
//     title: {
//         text: '',
//         verticalAlign: 'middle',
//         style: {
//             color: 'white',
//             // fontSize: '16px',
//             fontWeight: 'bold',
//             fontFamily: 'Heebo'
//         }
//     },
//     yAxis: {
//         title: {
//             text: '10',
//         },
//         minPadding: 0,
//         maxPadding: 0
//     },
//     plotOptions: {
//         pie: {
//             height: 200,
//             // width: 100,
//             // backgroundColor: '#fff',
//             // borderColor: null,
//             // margin: [0, 0, 0, 0],
//             // maxPadding: 0,
//             // spacing: [0, 0, 0, 0],
//         },
//         series: {
//             borderWidth: 0,
//             shadow: false,
//             innerSize: '60%',
//             dataLabels: {
//                 enabled: true,
//                 format: '<span style="color:yellow;font-size:15px">{point.y}</span> : <b>{point.name}</b><br/>',
//                 style: {
//                     color: 'white',
//                     font: 'bold 12px "Trebuchet MS", Heebo'
//                 }
//             },
//             cursor: 'pointer',
//             point: {
//                 events: {
//                     click: function (e) {
//                         window.location.href = `/dashBoard/ActiveCallType/${this.options.name}`;
//                     }
//                 }
//             }
//         }
//     },
//     credits: {
//         enabled: false
//     },
//     tooltip: {
//         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b> Calls<br/>',
//         style: {
//             fontFamily: 'Heebo',
//         }
//     },

//     series: [
//         {
//             name: "Active Calls",
//             colorByPoint: true,
//             data: []
//         }
//     ],

// }
// class DashBoardChart extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             options: options,
//             seriesData: []
//         }
//     }

//     componentDidMount() {
//         const orgId = localStorage.getItem('orgId')

//         // Make a request for a user with a given ID

//         let options = this.state.options;
//         let seriesData = [
//             {
//                 name: "Service",
//                 y: 1,
//                 drilldown: "Service"
//             },
//             {
//                 name: "Installation/Demo",
//                 y: 2,
//                 drilldown: "Installation/Demo"
//             },

//         ];
//         options.series[0].data = seriesData;
//         this.setState({
//             options: options,
//             seriesData: seriesData
//         })
//     }

//     render() {
//         const { options, seriesData } = this.state;

//         return (

//             // <div >
//             //     {
//             //         seriesData && seriesData.length > 0 ?
//             //             <HighchartsReact highcharts={Highcharts} options={options} />
//             //             :
//             //             null
//             //     }
//             // </div>
//             <div className="card-container">
//                 <div className="col-md-12">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="mt-3 mb-2">
//                                 <div className="field-name-active">Sending</div>
//                                 <div className="field-data-active">65</div>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="mt-3 mb-2">
//                                 <div className="field-name-active">Not Sending</div>
//                                 <div className="field-data-active">65</div>
//                             </div>
//                         </div>
//                     </div>
//                     <HighchartsReact containerProps={{ style: { width: '100px', height: '100px', marginLeft: 'auto', marginRight: 'auto', overFlow: 'visible !important' } }} highcharts={Highcharts} options={options} />
//                 </div>
//                 {/* <div className="row row-margin" style={{ margin: '0px', background: 'white' }}>
//                     <cardField value="sent" width={50} type={"active"} />
//                     <cardField value="Not sent" width={50} type={"inactive"} />
//                 </div> */}
//                 {/* <HighchartsReact containerProps={{ style: { width: '100px', height: '100px', marginLeft: 'auto', marginRight: 'auto', overFlow: 'visible !important' } }} highcharts={Highcharts}  options={options} />
//                     <div className="center mt-3 mb-3 name-spacing">Data Upload</div> */}

//             </div>
//         );
//     }
// }

// export default DashBoardChart;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import './card.css';

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
    const { cardName, activeMessage, inactiveMessage, activeStatus, inactiveStatus } = this.props;

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
                            <div className="field-name-active" style={{background:'#ff9900'}}>Not Sending</div>
                            <div className="field-data-active" style={{color:'#ff9900'}}>65</div>
                        </div>
                    </div>
                </div>
                <HighchartsReact containerProps={{ style: { width: '100px', height: '100px', marginLeft: 'auto', marginRight: 'auto', overFlow: 'visible !important' } }} highcharts={Highcharts} options={this.state.options} />
            </div>
            <div className="name-spacing">Data Upload</div>
        </div>
    )
}

}
export default DashBoardChart;