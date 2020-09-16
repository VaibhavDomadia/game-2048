import React from 'react';
import './scoreboard.css';

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "scoreBoard">
                <div className = "scoreTitle">Score:</div>
                <div className = "score">0</div>
            </div>
        );
    }
}

export default ScoreBoard;