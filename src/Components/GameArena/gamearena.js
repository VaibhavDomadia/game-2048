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
        this.generateRandomCellValue = this.generateRandomCellValue.bind(this);

        this.state = {
            board: this.initializeBoard()
        }
    }

    /**
     * This funtion is used to create the initial state of the board.
     * 
     * First it assign zero value to each cell of the board.
     * 
     * Then it creates 2 random number using generateRandomCellValue() function
     * and assign it to some random position/s in the board.
     * 
     * @returns 2D array of values that represent the state of board.
     */
    initializeBoard() {
        let board = new Array(BOARD_SIZE);
        for(let i = 0 ; i < BOARD_SIZE ; i++) {
            board[i] = new Array(BOARD_SIZE).fill(0);
        }

        let row = Math.floor(Math.random()*4);
        let column = Math.floor(Math.random()*4);
        board[row][column] = this.generateRandomCellValue();
        
        row = Math.floor(Math.random()*4);
        column = Math.floor(Math.random()*4);
        board[row][column] = this.generateRandomCellValue();

        return board;
    }

    /**
     * This function is used to generate either 2 or 4 using random number generator.
     * 
     * @returns 2 or 4 as value.
     */
    generateRandomCellValue() {
        let value = Math.floor(Math.random()*2) + 1;
        return value * 2;
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