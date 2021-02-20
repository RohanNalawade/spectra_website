import React from 'react';
import './css/firstPage.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DashBoardChart from './dashBoardChart';
import DashBoardImg from './photos/dashBoardImg.png';
import Map from './photos/map.png';
import BarChart from './barChart';
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            subTabIndex: 0,
            alertTabIndex: 0,
            masterName: 'Milk Chiller',
            dataUpload: false,
            siteStatus: false,
            tssStatus: false,
            alertStatus: false,
            cipStatus: false,
            barChart: false,
            batteryStatus: false,
            milkTank: false,
            map: false,
            dashBOardCArd: [
                {
                    active: 'sending'
                }
            ],
            masterConfiguration: ['Milk Chiller', 'Cold Room', 'Reefer'],
            gatewayConfiguration: [{
                name: 'Sensor', template: 'Device_`device_id`', testTable: 'Device_200011531743469'
            },
            {
                name: 'Loger', template: 'Device_`device_id`', testTable: 'Device_200011531743469'
            },
            {
                name: 'Beaker', template: 'Device_`device_id`', testTable: 'Device_200011531743469'
            },
            {
                name: 'Data Device', template: 'Device_`device_id`', testTable: 'Device_200011531743469'
            }
            ],
            alertRoleS: ['Cold Room Alert', 'Milk is not chiling', 'Reefer Switch OFF'],
            editAlert: ['Compressor Not Working', 'CIP Status', 'Compressor Status'],
            customer: [{ id: '1', siteName: 'Site 1', location: 'Ahmednagar', sitePOC: 'kanhaiya' },
            { id: '2', siteName: 'Site 2', location: 'Ahmednagar ', sitePOC: 'RBCH' }
            ],
            customerOne: [{ id: '1', siteName: 'Site 1', location: 'Ahmednagar', sitePOC: 'kanhaiya' },
            { id: '2', siteName: 'Site 2', location: 'Ahmednagar ', sitePOC: 'RBCH' }
            ],
            customerTwo: [{ id: '1', siteName: 'Site 1', location: 'Ahmednagar', sitePOC: 'kanhaiya' },
            { id: '2', siteName: 'Site 2', location: 'Goa Town', sitePOC: 'RBCH' }
            ],
        }
    }

    customerSelect = (customer) => {
        if (customer === 'customerfirst')
            this.setState({
                customer: this.state.customerOne
            })
        else {
            this.setState({
                customer: this.state.customerTwo
            })
        }
    }
    inputHandle = (e) => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    loginSubmit = (e) => {
        e.preventDefault();
        this.setState({
            tabIndex: this.state.tabIndex + 1
        })
    }
    dashBoardRequest = (e) => {
        this.setState({
            tabIndex: this.state.tabIndex + 1
        })
    }
    masterConfigurSelect = (masterName) => {
        this.setState({
            masterName: masterName
        })
    }
    handleCheckBOx = (selectedDashBoard) => {
        this.setState({
            [selectedDashBoard]: !true
        })
    }
    handleDataUpload = (e) => {
        this.setState({
            [e.target.id]: !this.state.dataUpload
        })
    }
    handleSiteStatus = (e) => {
        this.setState({
            [e.target.id]: !this.state.siteStatus
        })
    }
    handleTssStatus = (e) => {
        this.setState({
            [e.target.id]: !this.state.tssStatus
        })
    }
    handleAlertStatus = (e) => {
        this.setState({
            [e.target.id]: !this.state.alertStatus
        })
    }
    handleCipStatus = (e) => {
        this.setState({
            [e.target.id]: !this.state.cipStatus
        })
    }
    handleBarChart = (e) => {
        this.setState({
            [e.target.id]: !this.state.barChart
        })
    }
    handleBatteryStatus = (e) => {
        this.setState({
            [e.target.id]: !this.state.batteryStatus
        })
    }
    handleMilkTank = (e) => {
        this.setState({
            [e.target.id]: !this.state.milkTank
        })
    }
    handleMap = (e) => {
        this.setState({
            [e.target.id]: !this.state.map
        })
    }
    render() {
        const { tabIndex, subTabIndex, gatewayConfiguration, alertRoleS, customer, dataUpload, siteStatus, tssStatus, alertStatus, cipStatus, batteryStatus, milkTank, barChart, map, alertTabIndex, masterName } = this.state;
        return (
            <div>
                <div >
                    <Tabs id="controlled-tab-example" selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <Tab style={{ fontSize: '16px' }}>Step 1</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 2</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 3</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 4</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 5</Tab>
                            <Tab style={{ fontSize: '16px' }}>Step 6</Tab>
                        </TabList>
                        <TabPanel >
                            <div className="LogInHead" >
                                <div>
                                    <h5 className="loginText headingFont">Create Your Profile</h5>
                                    <form onSubmit={(e) => this.loginSubmit(e)}>
                                        <div className="form-group">
                                            <input type="email" name="email" className="login-input" onChange={this.inputHandle} placeholder="Enter Your Email" />
                                        </div>
                                        <div>
                                            <input type="text" maxLength="10" name="phoneNumber" onChange={this.inputHandle} className="login-input" placeholder="Enter Your Phone Number" />
                                        </div>
                                        <button type="submit" className="loginBut">Save</button>
                                    </form>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="hegithConfig" >
                                <h5 className="mb-4 headingFont">Choose your Configuration</h5>
                                <Tabs id="controlled-tab-example" selectedIndex={subTabIndex} onSelect={subTabIndex => this.setState({ subTabIndex })}>
                                    <TabList>
                                        <Tab style={{ fontSize: '14px' }}>Master Configuration</Tab>
                                        <Tab style={{ fontSize: '14px' }}>Gateway Configuration</Tab>
                                        <Tab style={{ fontSize: '14px' }}>Edit Alert Configuration</Tab>
                                        <Tab style={{ fontSize: '14px' }}>Alert Roles</Tab>
                                    </TabList>
                                    <TabPanel className="stepTwoTab">
                                        <div className="masterTab">
                                            {/* {
                                                masterConfiguration && masterConfiguration.length ?
                                                    masterConfiguration.map(el => {
                                                        return (
                                                            <div className="alertBoxCss" onClick={(e) => this.masterConfigurSelect(el)}>
                                                                <div className="col-md-12">
                                                                    <span className="subTabone">{el}</span>
                                                                    <button className="btn btn-secondary alertBut">Show Product</button>
                                                                    <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : ''
                                            } */}
                                            <div className="alertBoxCss" style={{ background: masterName === 'Milk Chiller' ? '#fff' : '#f3f3f5' }} onClick={(e) => this.masterConfigurSelect('Milk Chiller')}>
                                                <div className="col-md-12">
                                                    <span className="subTabone">Milk Chiller</span>
                                                    <button className="btn btn-secondary alertBut">Show Product</button>
                                                    {/* <button className="btn btn-secondary alertBut">Edit Alert Configuration</button> */}
                                                    <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                                </div>
                                            </div>
                                            <div className="alertBoxCss" style={{ background: masterName === 'Cold Room' ? '#fff' : '#f3f3f5' }} onClick={(e) => this.masterConfigurSelect('Cold Room')}>
                                                <div className="col-md-12">
                                                    <span className="subTabone">Cold Room</span>
                                                    <button className="btn btn-secondary alertBut">Show Product</button>
                                                    {/* <button className="btn btn-secondary alertBut">Edit Alert Configuration</button> */}
                                                    <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                                </div>
                                            </div>
                                            <div className="alertBoxCss" style={{ background: masterName === 'Reefer' ? '#fff' : '#f3f3f5' }} onClick={(e) => this.masterConfigurSelect('Reefer')}>
                                                <div className="col-md-12">
                                                    <span className="subTabone">Reefer</span>
                                                    <button className="btn btn-secondary alertBut">Show Product</button>
                                                    {/* <button className="btn btn-secondary alertBut">Edit Alert Configuration</button> */}
                                                    <button className="btn btn-secondary alertBut">Edit Parameter Mapping</button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="stepTwoTab">
                                        <div >
                                            <div className="col-md-12">
                                                <div className="tableBorder">
                                                    <div className="headBorder">
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <span className="gatewayHead">Gateway Name </span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span className="gatewayHead">Table Template </span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span className="gatewayHead">Test Table </span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span className="gatewayHead">Action </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        gatewayConfiguration && gatewayConfiguration.length ?
                                                            gatewayConfiguration.map(el => {
                                                                return (<div className="textBorder">
                                                                    <div className="row">
                                                                        <div className="col-3">
                                                                            <span className="gatewayText">{el.name} ({this.state.masterName}) </span>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <span className="gatewayText">{el.template} </span>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <span className="gatewayText">{el.testTable}</span>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <span className="gatewayText">
                                                                                <i className="fas fa-pen" style={{ fontSize: '15px',color: '#363945' }}  aria-hidden="true"></i>
                                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                </div>)
                                                            }) : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="stepTwoTab">
                                        <div className="col-md-12">
                                            <div className="hegithConfig" >
                                                <h5 className="mb-4 headingFont mrbt">Alert Configuration - {this.state.masterName}</h5>
                                                <div className="heightAdjust">
                                                    <div className="row width" >
                                                        {
                                                            alertRoleS && alertRoleS.length ?
                                                                alertRoleS.map(el => {
                                                                    return (
                                                                        <div className="col-md-4 col-12">
                                                                            <div className="">
                                                                                <div className="card" >
                                                                                    <div className="card-body">
                                                                                        <div className="card-title center">
                                                                                            {el}
                                                                                        </div>
                                                                                        <div className="card-subtitle">
                                                                                            <div className="col-md-12" style={{ display: 'flex', padding: '0px' }}>
                                                                                                <div className="col-md-6 center">
                                                                                                    <label className="">Short Name</label>
                                                                                                    <input disabled type="text" className="form-control" value="tss_alert" style={{ fontSize: '10px' }} />
                                                                                                </div>
                                                                                                <div className="col-md-6 center">
                                                                                                    <label className="">Product</label>
                                                                                                    <input disabled type="text" className="form-control" value="Milk Chiller " style={{ fontSize: '10px' }} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className="col-12" style={{ display: 'flex', padding: '0px', marginTop: '10px' }}>
                                                                                                <div className="col-6">
                                                                                                    <label className="lableAlign">Continuous  </label>
                                                                                                    <input type="checkbox" className="form-control" value="true" style={{ fontSize: '10px', width: '50px' }} />
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    <label className="lableAlign">Timed  </label>
                                                                                                    <input type="checkbox" className="form-control" value="true" style={{ fontSize: '10px', width: '70px' }} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-12">
                                                                                                <label className="lableAlign">Product</label>
                                                                                                <input type="text" className="form-control" value="60" style={{ fontSize: '10px' }} />
                                                                                            </div>
                                                                                            <div className="col-12" style={{ display: 'flex', padding: '0px', marginTop: '10px' }}>
                                                                                                <div className="col-6">
                                                                                                    <label className="lableAlign">Is Log</label>
                                                                                                    <input type="checkbox" className="form-control" checked value="true" style={{ fontSize: '10px', width: '70px' }} />
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    <label className="lableAlign">Is Alert  </label>
                                                                                                    <input type="checkbox" className="form-control" checked value="true" style={{ fontSize: '10px', width: '70px' }} />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-12 center">
                                                                                                <label className="lableAlign">Trigger Count(*)</label>
                                                                                                <input type="text" className="form-control" value="7" style={{ fontSize: '10px' }} />
                                                                                            </div>
                                                                                            <div className="col-md-12 center">
                                                                                                <label className="lableAlign">Definition</label>
                                                                                                <input type="text" className="form-control" value="TSSTemp1 > -5.0" style={{ fontSize: '10px' }} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>)
                                                                }) : ''
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className="stepTwoTab">
                                        <div >
                                            <div className="col-md-12">
                                                <div className="tableBorder">
                                                    <div className="headBorder">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <span className="gatewayHead">Alert Name </span>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="gatewayHead">Super Admin</span>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="gatewayHead">Admin </span>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="gatewayHead">Operations Manager </span>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="gatewayHead">Technician </span>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="gatewayHead">site POC </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        alertRoleS && alertRoleS.length ?
                                                            alertRoleS.map(el => {
                                                                return (<div className="textBorder">
                                                                    <div className="row">
                                                                        <div className="col-2">
                                                                            <span className="gatewayText">{el} </span>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <input type="checkBox" className="checkBoxCss"></input>
                                                                        </div>
                                                                    </div>
                                                                </div>)
                                                            }) : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </TabPanel>
                        <TabPanel className="stepTwoTab">
                            <div className="hegithConfig" >
                                <h5 className="headingFont">Create your team</h5>
                                <div className="mt-4">
                                    <div className="col-md-12">
                                        <div className="tableBorder">
                                            <div className="headBorder">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Full Name </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Email</span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Phone </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Role</span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Last Login </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayHead">Actions </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="textBorder">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <span className="gatewayText">User 1 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.email ? this.state.email : 'demo@starlly.in'}</span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.phoneNumber ? this.state.phoneNumber : '9999999999'} </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <select className="gatewayText" style={{ border: 'none' }}>
                                                            <option>Super Admin</option>
                                                            <option>Admin</option>
                                                            <option>Manager</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">2020-09-09 15:33 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">Aeron </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="textBorder">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <span className="gatewayText">User 2 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.email ? this.state.email : 'demo@starlly.in'}</span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.phoneNumber ? this.state.phoneNumber : '9999999999'} </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <select className="gatewayText" style={{ border: 'none' }}>
                                                            <option>Admin</option>
                                                            <option>Super Admin</option>
                                                            <option>Manager</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">2020-09-09 15:33 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">Rohan </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="textBorder">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <span className="gatewayText">User 3 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.email ? this.state.email : 'demo@starlly.in'}</span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">{this.state.phoneNumber ? this.state.phoneNumber : '9999999999'} </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <select className="gatewayText" style={{ border: 'none' }}>
                                                            <option>Manager</option>
                                                            <option>Super Admin</option>
                                                            <option>Admin</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">2020-09-09 15:33 </span>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="gatewayText">Aeron </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="hegithConfig" >
                                <div className="row">
                                    <div className="col-md-12"> <h5 className="mb-4 headingFont">Create customers and Site to be monitored</h5></div>
                                    <div className="col-md-3">
                                        <h5 className="headingFont"> Customers </h5>
                                        <div className="customer">
                                            <div className="customerName" onClick={() => this.customerSelect('customerfirst')}>Company 1</div>
                                            <div className="icon-container pull-right">
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="customer">
                                            <div className="customerName" onClick={() => this.customerSelect('customerSecond')}>Company 2</div>
                                            <div className="icon-container pull-right">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="sites">Sites</p>
                                        <div className="col-md-12 stepTwoTab">
                                            <div className="tableBorder">
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Sl No </span>
                                                        </div>
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Site Name</span>
                                                        </div>
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Location </span>
                                                        </div>
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Site POC</span>
                                                        </div>
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Email </span>
                                                        </div>
                                                        <div className="col-2">
                                                            <span className="gatewayHead">Phone </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    customer && customer.length ?
                                                        customer.map(el => {
                                                            return (<div className="textBorder">
                                                                <div className="row">
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{el.id}</span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{el.siteName} </span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{el.location} </span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{el.sitePOC} </span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{this.state.email ? this.state.email : 'demo@starlly.in'} </span>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <span className="gatewayText">{this.state.phoneNumber ? this.state.phoneNumber : '9999999999'} </span>
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                        }) : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="stepTwoTab">
                            <div className="hegithConfig" >
                                <div className="col-md-12"><h5 className="mb-4 headingFont">Choose needed elements on Dashboard</h5></div>

                                <div><Tabs id="controlled-tab-example" selectedIndex={alertTabIndex} onSelect={alertTabIndex => this.setState({ alertTabIndex })}>
                                    <TabList>
                                        <Tab style={{ fontSize: '14px' }}>Parameters</Tab>
                                        <Tab style={{ fontSize: '14px' }}>Map</Tab>
                                        <Tab style={{ fontSize: '14px' }}>Bar Chart</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div>
                                            <div className="tableBorder">
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <span className="gatewayHead">Data Upload </span>
                                                        </div>
                                                        <div className="col-3">
                                                            <span className="gatewayHead">Site Status</span>
                                                        </div>
                                                        <div className="col-3">
                                                            <span className="gatewayHead">TSS Status </span>
                                                        </div>
                                                        <div className="col-3">
                                                            <span className="gatewayHead">Alert Status </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleDataUpload(e)} id='dataUpload' defaultChecked={this.state.dataUpload} className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleSiteStatus(e)} id="siteStatus" defaultChecked={this.state.siteStatus} className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleTssStatus(e)} id="tssStatus" defaultChecked={this.state.tssStatus} className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleAlertStatus(e)} id="alertStatus" defaultChecked={this.state.alertStatus} className="checkBoxCss"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="headBorder">
                                                    <div className="row">
                                                        <div className="col-3" ><p className="gatewayHead bgColor">CIP Status</p></div>
                                                        <div className="col-3">
                                                            <span className="gatewayHead bgColor" >DC Battery Status </span>
                                                        </div>
                                                        <div className="col-3">
                                                            <span className="gatewayHead" style={{ paddingLeft: '0px' }}>Milk in Tank </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="textBorder">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleCipStatus(e)} defaultChecked={this.state.cipStatus} id="cipStatus" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleBatteryStatus(e)} defaultChecked={this.state.batteryStatus} id="batteryStatus" className="checkBoxCss"></input>
                                                        </div>
                                                        <div className="col-3">
                                                            <input type="checkBox" onClick={(e) => this.handleMilkTank(e)} defaultChecked={this.state.milkTank} id="milkTank" className="checkBoxCss"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <h5 className="chartHeading">Do you want see the map</h5>
                                            <input type="checkBox" onClick={(e) => this.handleMap(e)} id="map" defaultChecked={this.state.map} className="checkBoxCssBig"></input>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            <h5 className="chartHeading">Do you want Bar Chart</h5>
                                            <input type="checkBox" onClick={(e) => this.handleBarChart(e)} id="barChart" defaultChecked={this.state.barChart} className="checkBoxCssBig"></input>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                                </div>
                                <div className="col-md-12 dashBoardRequest"><button type="button" onClick={this.dashBoardRequest} className="btn btn-primary getBut">Dashboard</button></div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="hegithConfig" >
                                <div className="col-md-12"><h5 className="headingFont">Dashboard</h5></div>
                                <div className="row dashboardHeight">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="card-container">
                                                    <div style={{ textAlign: 'center' }}>
                                                        <img src={DashBoardImg} alt="" className="total-icon" />
                                                        <p className="siteText">Total No of Sites</p>
                                                        <p className="siteNo">2</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3" style={{ display: dataUpload === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="Data Upload" />
                                            </div>
                                            <div className="col-md-3" style={{ display: siteStatus === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="Site Status" />
                                            </div>
                                            <div className="col-md-3" style={{ display: tssStatus === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="TSS Status" />
                                            </div>
                                            <div className="col-md-3" style={{ display: alertStatus === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="Alert Status" />
                                            </div>
                                            <div className="col-md-3" style={{ display: cipStatus === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="CIP Status" />
                                            </div>

                                            <div className="col-md-3" style={{ display: batteryStatus === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="DC Battery Status" />
                                            </div>
                                            <div className="col-md-3" style={{ display: milkTank === true ? 'block' : 'none' }}>
                                                <DashBoardChart name="Milk in Tank" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8" style={{ display: map === true ? 'block' : 'none', marginTop: '35px' }}>
                                        <div className="shadow">
                                            <img className="mapImg" src={Map} alt="map"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 paddingRemove shadow" style={{ display: barChart === true ? 'block' : 'none', marginTop: '35px' }}>
                                        <BarChart name="Milk in Tank" />

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