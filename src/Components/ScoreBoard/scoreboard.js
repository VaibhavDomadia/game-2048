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
                <div className = "score">{this.props.score}</div>
            </div>
        );
    }
}

export default ScoreBoard;