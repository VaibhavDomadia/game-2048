import React from 'react';
import './restartbutton.css';

class RestartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className = "restartButton" onClick = {this.props.restartGame}>Restart</button>
        );
    }
}

export default RestartButton;