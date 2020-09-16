import React from 'react';
import GamePlayOptions from '../GamePlayOptions/gameplayoptions'
import Board from '../Board/board'
import ScoreBoard from '../ScoreBoard/scoreboard'
import RestartButton from '../RestartButton/restartbutton'
import './gamearena.css';

class GameArena extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "gameArena">
                <GamePlayOptions/>
                <Board/>
                <ScoreBoard/>
                <RestartButton/>
            </div>
        );
    }
}

export default GameArena;