import React from 'react';
import './scoreboard.css';

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Score:</div>
                <div>0</div>
            </div>
        );
    }
}

export default ScoreBoard;