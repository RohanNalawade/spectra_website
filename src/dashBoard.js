import React from 'react';
import './css/firstPage.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            subTabIndex: 0,
        }
    }
    handleTabs = () => {
        this.setState({
            tabIndex: this.state.tabIndex + 1
        })
    }
    // handleTabs = () => {
    //     this.setState({
    //         subTabIndex: this.state.subTabIndex + 1
    //     })
    // }
    render() {
        const { tabIndex, subTabIndex } = this.state;
        return (
            <div>
                <div style={{ height: '400px' }}>
                    <Tabs id="controlled-tab-example" selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <Tab style={{ fontSize: '16px' }}>Step 1</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 2</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 3</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 4</Tab>
                        </TabList>
                        <TabPanel >
                            <div className="LogInHead" style={{ height: '200px' }}>
                                <div><button className="loginBut" onClick={() => this.handleTabs()}>LogIn</button></div>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <h5>Setup</h5>
                            <Tabs id="controlled-tab-example" selectedIndex={subTabIndex} onSelect={subTabIndex => this.setState({ subTabIndex })}>
                                <TabList>
                                    <Tab style={{ fontSize: '14px' }}>Master Configuration</Tab>
                                    <Tab style={{ fontSize: '14px' }}>Gateway Configuration</Tab>
                                    <Tab style={{ fontSize: '14px' }}>Alert Roles</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="alertBoxCss">
                                        <div className="col-md-12">
                                            <span className="subTabone">Milk Chiller</span>
                                            <button className="btn btn-secondary alertBut">Show Product</button>
                                            <button className="btn btn-secondary alertBut">Edit Alert Configuration</button>
                                            <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                        </div>
                                    </div>
                                    <div className="alertBoxCss">
                                        <div className="col-md-12">
                                            <span className="subTabone">Cold Room</span>
                                            <button className="btn btn-secondary alertBut">Show Product</button>
                                            <button className="btn btn-secondary alertBut">Edit Alert Configuration</button>
                                            <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                        </div>
                                    </div>
                                    <div className="alertBoxCss">
                                        <div className="col-md-12">
                                            <span className="subTabone">Reefer</span>
                                            <button className="btn btn-secondary alertBut">Show Product</button>
                                            <button className="btn btn-secondary alertBut">Edit Alert Configuration</button>
                                            <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div >
                                        <div className="col-md-12">
                                            <div className="tableBorder">
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <span className="gatewayHead">Gateway Name </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayHead">Table Template </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayHead">Test Table </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayHead">Action </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Aeron </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_`{'device_id'}` </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_200011531743469</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText"><i className="fas fa-pen"></i> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Santel Check </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_`{'device_id'}` </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_200011531743469</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText"><i className="fas fa-pen"></i> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Gateway Name </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_`{'device_id'}` </span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText">Device_200011531743469</span>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <span className="gatewayText"><i className="fas fa-pen"></i> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div >
                                        <div className="col-md-12">
                                            <div className="tableBorder">
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Alert Name </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Super Admin</span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Admin </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Operations Manager </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Technician </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">site POC </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Aeron </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Aeron </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Aeron </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                        <TabPanel >
                            <h5>IAM (Identity and Access Management)</h5>
                            <div>
                                <div className="col-md-12">
                                    <div className="tableBorder">
                                        <div className="headBorder">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Full Name </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Email</span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Phone </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Role</span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Last Login </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayHead">Actions </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="textBorder">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Aeron </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Aeron@starlly.in </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">9999999999 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <select className="gatewayText" style={{ border: 'none' }}>
                                                        <option>Super Admin</option>
                                                        <option>Admin</option>
                                                        <option>Manager</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">2020-09-09 15:33 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Aeron </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="textBorder">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Rohan </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">rohan@starlly.in </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">9999999999 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <select className="gatewayText" style={{ border: 'none' }}>
                                                        <option>Admin</option>
                                                        <option>Super Admin</option>
                                                        <option>Manager</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">2020-09-09 15:33 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Rohan </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="textBorder">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Hari </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">hari@starlly.in </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">9999999999 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <select className="gatewayText" style={{ border: 'none' }}>
                                                        <option>Manager</option>
                                                        <option>Super Admin</option>
                                                        <option>Admin</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">2020-09-09 15:33 </span>
                                                </div>
                                                <div className="col-md-2">
                                                    <span className="gatewayText">Aeron </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Customer</h5>
                                        <div className="customer">
                                            <div className="customerName">Rohan</div>
                                            <div className="icon-container pull-right">
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="customer">
                                            <div className="customerName">Hari</div>
                                            <div className="icon-container pull-right">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="col-md-12">
                                            <div className="tableBorder">
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Sl No </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Site Name</span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Location </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Site POC</span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Email </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayHead">Phone </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">1</span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Sakat,Ahmednagar </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Ahmednagar </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">kanhaiya </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">rohan@starlly.in </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">9999999999 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">2</span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Ahmednagar </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">Ahmednagar </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">RBCH </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">rohan@starlly.in </span>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <span className="gatewayText">9999999999 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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