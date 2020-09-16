import React from 'react';
import GamePlayOptions from '../GamePlayOptions/gameplayoptions'
import Board from '../Board/board'
import ScoreBoard from '../ScoreBoard/scoreboard'
import RestartButton from '../RestartButton/restartbutton'
import './gamearena.css';

const BOARD_SIZE = 4;

class GameArena extends React.Component {
    constructor(props) {
        super(props);

        this.initializeBoard = this.initializeBoard.bind(this);

        this.state = {
            board: this.initializeBoard()
        }
    }

    initializeBoard() {
        let board = new Array(BOARD_SIZE);
        for(let i = 0 ; i < BOARD_SIZE ; i++) {
            board[i] = new Array(BOARD_SIZE).fill(0);
        }

        return board;
    }

    render() {
        const {board} = this.state;
        return (
            <div className = "gameArena">
                <GamePlayOptions/>
                <Board board = {board}/>
                <ScoreBoard/>
                <RestartButton/>
            </div>
        );
    }
}

export default GameArena;