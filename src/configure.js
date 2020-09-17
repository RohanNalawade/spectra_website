import React from 'react';
import './css/firstPage.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes as fasTimes } from "@fortawesome/free-solid-svg-icons";
import './css/firstPage.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Configure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }
    // toggleCancelHandle = () => {

    // }
    render() {
        const { tabIndex } = this.state;
        return (
            <div>
                <div className="cancelModal" onClick={() => this.props.toggleCancel(false)}> X</div>
                <div className="container">
                    <Tabs id="controlled-tab-example" selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <Tab style={{ fontSize: '16px' }}>Dairy</Tab>
                            <Tab style={{ fontSize: '16px' }}>Brewary</Tab>
                            <Tab style={{ fontSize: '16px' }}>Agriculture</Tab>
                        </TabList>
                        <TabPanel>
                            <h5>Dairy</h5>
                        </TabPanel>
                        <TabPanel>
                            <h5>Brewary</h5>
                        </TabPanel>
                        <TabPanel>
                            <h5>Agriculture</h5>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}