import React from 'react';
import Board from '../Board/board'
import './gamearena.css';

class GameArena extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Board/>
            </div>
        );
    }
}

export default GameArena;