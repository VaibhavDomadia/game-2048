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

        this.getEmptyBoard = this.getEmptyBoard.bind(this);
        this.initializeBoard = this.initializeBoard.bind(this);
        this.move = this.move.bind(this);
        document.onkeyup = this.move;
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.shrinkArray = this.shrinkArray.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.isGameOver = this.isGameOver.bind(this);
        this.isGameWon = this.isGameWon.bind(this);

        this.state = {
            board: this.initializeBoard(),
            gameOver: false,
            gameWon: false,
            score: 0
        }
    }


    /**
     * This function created an empty board with values filled with zero
     * 
     * @returns an empty 2D board
     */
    getEmptyBoard() {
        let board = new Array(BOARD_SIZE);
        for(let i = 0 ; i < BOARD_SIZE ; i++) {
            board[i] = new Array(BOARD_SIZE).fill(0);
        }

        return board;
    }

    /**
     * This funtion is used to create the initial state of the board.
     * 
     * First it call getEmptyBoard() method to get initial board.
     * 
     * Then it creates 2 random number using generateRandomCellValue() function
     * and assign it to some random position/s in the board.
     * 
     * @returns 2D array of values that represent the state of board.
     */
    initializeBoard() {
        let board = this.getEmptyBoard();

        let row = Math.floor(Math.random()*4);
        let column = Math.floor(Math.random()*4);
        board[row][column] = this.props.generateRandomCellValue();
        
        row = Math.floor(Math.random()*4);
        column = Math.floor(Math.random()*4);
        board[row][column] = this.props.generateRandomCellValue();

        return board;
    }

    /**
     * This function takes an array as input which basically represent a row or a column
     * in the board and then shrinks it from left to right in a way that if two consecutive values 
     * are same then both are merged up by logic defined in getMergedCellValue() function and then
     * assigned to the first value and second value is deleted.
     * 
     * @param array The array which needs to be shrinked.
     * 
     * @returns a shrinked form of the array passed as a parameter.
     */
    shrinkArray(array) {
        let shrinkedArray = [];

        let addScore = 0;
        
        for(let i=0 ; i<array.length ; i++) {
            if(i+1 < array.length) {
                if(array[i] == array[i+1]) {
                    shrinkedArray.push(this.props.getMergedCellValue(array[i]));
                    addScore += this.props.getScoreFromMerging(array[i]);
                    i++;
                }
                else {
                    shrinkedArray.push(array[i]);
                }
            }
            else {
                shrinkedArray.push(array[i]);
            }
        }

        if(addScore != 0) {
            this.setState((prevousState, props) => {
                return {score: prevousState.score + addScore};
            });
        }

        return shrinkedArray;
    }

    /**
     * This function calls appropriate method based on the key pressed in the game.
     * 
     * @param event recieves the event that was generated as a result of on key press on the game.
     */
    move(event) {
        if(this.state.gameWon) {
            return;
        }

        let direction = event.keyCode - 37;
        if(0 <= direction && direction < 4) {
            switch(direction) {
                case 0:
                    this.moveLeft();
                    break;
                case 1:
                    this.moveUp();
                    break;
                case 2:
                    this.moveRight();
                    break;
                case 3:
                    this.moveDown();
                    break;
            }

            const isGameOver = this.isGameOver();
            if(isGameOver) {
                this.setState({gameOver: true});
            }

            const isGameWon = this.isGameWon();
            if(isGameWon) {
                this.setState({gameWon: true});
            }
        }
    }

    /**
     * This function implements the left move method of the game
     * 
     * It creates the new state of the board from the previous state in a way that
     * all the cells are pushed on left side of the board and are shrinked accordingly.
     */
    moveLeft() {
        const {board} = this.state;

        let movementHappened = false;

        let updatedBoard = this.getEmptyBoard();

        for(let i=0 ; i<BOARD_SIZE ; i++) {
            let slidedRow = [];

            let flag = false;
            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(board[i][j] != 0) {
                    slidedRow.push(board[i][j]);
                    if(flag) {
                        movementHappened = true;
                    }
                }
                else {
                    flag = true;
                }
            }

            let shrinkedRow = this.shrinkArray(slidedRow);

            if(shrinkedRow.length != slidedRow.length) {
                movementHappened = true;
            }

            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(j < shrinkedRow.length) {
                    updatedBoard[i][j] = shrinkedRow[j];
                }
                else {
                    updatedBoard[i][j] = 0;
                }
            }
        }

        if(movementHappened) {
            let emptyCellNumber = [];
            for(let i=0 ; i<BOARD_SIZE ; i++) {
                if(updatedBoard[i][BOARD_SIZE-1] == 0) {
                    emptyCellNumber.push(i);
                }
            }

            if(emptyCellNumber.length != 0) {
                let index = Math.floor(Math.random()*emptyCellNumber.length);
                let positionToFill = emptyCellNumber[index];
                updatedBoard[positionToFill][BOARD_SIZE-1] = this.props.generateRandomCellValue();
            }
        }

        this.setState({board: updatedBoard});
    }

    /**
     * This function implements the right move method of the game
     * 
     * It creates the new state of the board from the previous state in a way that
     * all the cells are pushed on right side of the board and are shrinked accordingly.
     */
    moveRight() {
        const {board} = this.state;

        let movementHappened = false;

        let updatedBoard = this.getEmptyBoard();

        for(let i=0 ; i<BOARD_SIZE ; i++) {
            let slidedRow = [];

            let flag = false;
            for(let j=BOARD_SIZE-1 ; j>=0 ; j--) {
                if(board[i][j] != 0) {
                    slidedRow.push(board[i][j]);
                    if(flag) {
                        movementHappened = true;
                    }
                }
                else {
                    flag = true;
                }
            }

            let shrinkedRow = this.shrinkArray(slidedRow);

            if(shrinkedRow.length != slidedRow.length) {
                movementHappened = true;
            }

            for(let j=BOARD_SIZE-1 ; j>=0 ; j--) {
                if(BOARD_SIZE-j-1 < shrinkedRow.length) {
                    updatedBoard[i][j] = shrinkedRow[BOARD_SIZE-j-1];
                }
                else {
                    updatedBoard[i][j] = 0;
                }
            }
        }

        if(movementHappened) {
            let emptyCellNumber = [];
            for(let i=0 ; i<BOARD_SIZE ; i++) {
                if(updatedBoard[i][0] == 0) {
                    emptyCellNumber.push(i);
                }
            }

            if(emptyCellNumber.length != 0) {
                let index = Math.floor(Math.random()*emptyCellNumber.length);
                let positionToFill = emptyCellNumber[index];
                updatedBoard[positionToFill][0] = this.props.generateRandomCellValue();
            }
        }

        this.setState({board: updatedBoard});
    }

    /**
     * This function implements the up move method of the game
     * 
     * It creates the new state of the board from the previous state in a way that
     * all the cells are pushed upwards in the board and are shrinked accordingly.
     */
    moveUp() {
        const {board} = this.state;

        let movementHappened = false;

        let updatedBoard = this.getEmptyBoard();

        for(let j=0 ; j<BOARD_SIZE ; j++) {
            let slidedColumn = [];

            let flag = false;
            for(let i=0 ; i<BOARD_SIZE ; i++) {
                if(board[i][j] != 0) {
                    slidedColumn.push(board[i][j]);
                    if(flag) {
                        movementHappened = true;
                    }
                }
                else {
                    flag = true;
                }
            }

            let shrinkedColumn = this.shrinkArray(slidedColumn);

            if(shrinkedColumn.length != slidedColumn.length) {
                movementHappened = true;
            }

            for(let i=0 ; i<BOARD_SIZE ; i++) {
                if(i < shrinkedColumn.length) {
                    updatedBoard[i][j] = shrinkedColumn[i];
                }
                else {
                    updatedBoard[i][j] = 0;
                }
            }
        }

        if(movementHappened) {
            let emptyCellNumber = [];
            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(updatedBoard[BOARD_SIZE-1][j] == 0) {
                    emptyCellNumber.push(j);
                }
            }

            if(emptyCellNumber.length != 0) {
                let index = Math.floor(Math.random()*emptyCellNumber.length);
                let positionToFill = emptyCellNumber[index];
                updatedBoard[BOARD_SIZE-1][positionToFill] = this.props.generateRandomCellValue();
            }
        }

        this.setState({board: updatedBoard});
    }

    /**
     * This function implements the down move method of the game
     * 
     * It creates the new state of the board from the previous state in a way that
     * all the cells are pushed downwards in the board and are shrinked accordingly.
     */
    moveDown() {
        const {board} = this.state;

        let movementHappened = false;

        let updatedBoard = this.getEmptyBoard();

        for(let j=0 ; j<BOARD_SIZE ; j++) {
            let slidedColumn = [];

            let flag = false;
            for(let i=BOARD_SIZE-1 ; i>=0 ; i--) {
                if(board[i][j] != 0) {
                    slidedColumn.push(board[i][j]);
                    if(flag) {
                        movementHappened = true;
                    }
                }
                else {
                    flag = true;
                }
            }

            let shrinkedColumn = this.shrinkArray(slidedColumn);

            if(shrinkedColumn.length != slidedColumn.length) {
                movementHappened = true;
            }

            for(let i=BOARD_SIZE-1 ; i>=0 ; i--) {
                if(BOARD_SIZE-i-1 < shrinkedColumn.length) {
                    updatedBoard[i][j] = shrinkedColumn[BOARD_SIZE-i-1];
                }
                else {
                    updatedBoard[i][j] = 0;
                }
            }
        }

        if(movementHappened) {
            let emptyCellNumber = [];
            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(updatedBoard[0][j] == 0) {
                    emptyCellNumber.push(j);
                }
            }

            if(emptyCellNumber.length != 0) {
                let index = Math.floor(Math.random()*emptyCellNumber.length);
                let positionToFill = emptyCellNumber[index];
                updatedBoard[0][positionToFill] = this.props.generateRandomCellValue();
            }
        }

        this.setState({board: updatedBoard});
    }

    /**
     * This function restarts the game.
     * 
     * It do so by calling initializeBoard() method and set to the current state of the board
     * and setting gameWon and gameOver state to false.
     */
    restartGame() {
        this.setState(
            {
                board: this.initializeBoard(),
                gameOver: false,
                gameWon: false,
                score: 0
            }
        );
    }

    /**
     * This function checks whether any move is possible or not.
     * If not then it return true denoting that game is over.
     * 
     * @returns true if game is over else return false.
     */
    isGameOver() {
        const {board} = this.state;

        for(let i=0 ; i<BOARD_SIZE ; i++) {
            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(board[i][j] == 0) {
                    return false;
                }
            }
        }

        for(let i=0 ; i<BOARD_SIZE ; i++) {
            for(let j=1 ; j<BOARD_SIZE ; j++) {
                if(board[i][j] == board[i][j-1]) {
                    return false;
                }
            }
        }

        for(let j=0 ; j<BOARD_SIZE ; j++) {
            for(let i=1 ; i<BOARD_SIZE ; i++) {
                if(board[i][j] == board[i-1][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * This function checks whether any cell value is equal to the value defined in gameWonCellValue or not.
     * If yes then this function returns true denoting that game is completed.
     * 
     * @returns true is game is completed else false;
     */
    isGameWon() {
        const {board} = this.state;

        for(let i=0 ; i<BOARD_SIZE ; i++) {
            for(let j=0 ; j<BOARD_SIZE ; j++) {
                if(board[i][j] == this.props.gameWonCellValue) {
                    return true;
                }
            }
        }

        return false;
    }

    render() {
        const {board, gameOver, gameWon, score} = this.state;
        return (
            <div className = "gameArena">
                <GamePlayOptions/>
                <Board gameWon = {gameWon} gameOver = {gameOver} board = {board}/>
                <ScoreBoard score = {score}/>
                <RestartButton restartGame = {this.restartGame}/>
            </div>
        );
    }
}

export default GameArena;