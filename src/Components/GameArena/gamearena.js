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
        this.generateRandomCellValue = this.generateRandomCellValue.bind(this);
        this.move = this.move.bind(this);
        document.onkeyup = this.move;
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.shrinkArray = this.shrinkArray.bind(this);

        this.state = {
            board: this.initializeBoard()
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

    /**
     * This function takes an array as input which basically represent a row or a column
     * in the board and then shrinks it from left to right in a way that if two consecutive values 
     * are same then both are summed up and assigned to the first value and second value is deleted.
     * 
     * @param array The array which needs to be shrinked.
     * 
     * @returns a shrinked form of the array passed as a parameter.
     */
    shrinkArray(array) {
        let shrinkedArray = [];
        
        for(let i=0 ; i<array.length ; i++) {
            if(i+1 < array.length) {
                if(array[i] == array[i+1]) {
                    shrinkedArray.push(array[i]*2);
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

        return shrinkedArray;
    }

    /**
     * This function calls appropriate method based on the key pressed in the game.
     * 
     * @param event recieves the event that was generated as a result of on key press on the game.
     */
    move(event) {
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
                updatedBoard[positionToFill][BOARD_SIZE-1] = this.generateRandomCellValue();
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
                updatedBoard[positionToFill][0] = this.generateRandomCellValue();
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
                updatedBoard[BOARD_SIZE-1][positionToFill] = this.generateRandomCellValue();
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
                updatedBoard[0][positionToFill] = this.generateRandomCellValue();
            }
        }

        this.setState({board: updatedBoard});
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