import React from 'react';
import './css/firstPage.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes as fasTimes } from "@fortawesome/free-solid-svg-icons";
import './css/firstPage.css'

export default class Configure extends React.Component {
    constructor(props) {
        super(props);
    }
    // toggleCancelHandle = () => {

    // }
    render() {
        return (
            <div>
                <div className="cancelModal" onClick={() => this.props.toggleCancel(false)}> X</div>
            </div>
        )
    }
}