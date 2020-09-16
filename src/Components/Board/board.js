import React from 'react';
import Row from '../Row/row';
import './board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {board, gameWon, gameOver} = this.props;

        return (
            <div className = "boardContainer">
                {gameWon && <div className = "gameWonBanner">You Won!</div>}
                {!gameWon && gameOver && <div className = "gameOverBanner">Game Over!</div>}
                <div className = "board">
                    {
                        board.map((row, index) => <Row key = {index} cellValues = {row}/>)
                    }
                </div>
            </div>
        );
    }
}

export default Board;