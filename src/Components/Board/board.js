import React from 'react';
import Row from '../Row/row';
import './board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {board} = this.props;

        return (
            <div className = "board">
                {
                    board.map((row, index) => <Row key = {index} cellValues = {row}/>)
                }
            </div>
        );
    }
}

export default Board;