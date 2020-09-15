import React from 'react';
import Row from '../Row/row';
import './board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "board">
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </div>
        );
    }
}

export default Board;