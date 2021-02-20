import React from 'react';
import './css/firstPage.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Configure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }
    render() {
        const { tabIndex } = this.state;
        return (
            <div>
                <div className="cancelModal" onClick={() => this.props.toggleCancel(false)}> X</div>
                <div className="container">
                    <Tabs id="controlled-tab-example" selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <Tab style={{ fontSize: '16px' }}>Milk Chiller</Tab>
                            <Tab style={{ fontSize: '16px' }}>Cold Storage</Tab>
                            <Tab style={{ fontSize: '16px' }}>Reefer</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid-item-config">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="testcolor" style={{backgroundColor:'#10c6a3'}}></div>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="clent-config">Enable remote monitoring of Milk Chiller and milk</li>
                                            <li className="clent-config">Provide real time status about the chiller and its Supporting device</li>
                                            <li className="clent-config">Share message to the respective maintenance team </li>
                                            <li className="clent-config">Allow resolution history mapping done for field engineers</li>
                                            <li className="clent-config">Data analysis and reboust alert rule setting </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid-item-config">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="testcolor" style={{backgroundColor:'#0e7c60'}}></div>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="clent-config"> Refrigeration related parameters configuration</li>
                                            <li className="clent-config">Assigning location specific machines to a certain meintenance person</li>
                                            <li className="clent-config">ALert conditions preset to avoid hassles</li>
                                            <li className="clent-config">Messaging service congigured track multiple sites</li>
                                            <li className="clent-config">  Meat/Vegetables preservation technique followed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid-item-config">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="testcolor" style={{backgroundColor:'#117a8b'}}>
                                            <span style={{visibility:'hidden'}}>Pic</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="clent-config">Tracking mechanism configured for Reefers</li>
                                            <li className="clent-config">Raw material freshness realated information tracked real time</li>
                                            <li className="clent-config">Messaging and Alert rules configuration appied which worked seamlessly </li>
                                            <li className="clent-config">Edge cases checked wrt locations and connectivity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}