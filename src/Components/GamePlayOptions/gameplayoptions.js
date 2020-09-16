import React from 'react';
import ArrowUp from '../../Icons/arrowup.svg';
import ArrowDown from '../../Icons/arrowdown.svg';
import ArrowLeft from '../../Icons/arrowleft.svg';
import ArrowRight from '../../Icons/arrowright.svg';
import './gameplayoptions.css';

class GamePlayOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "gamePlayOptions">
                <h2 className = "gamePlayMessage">Use Arrow Keys to Play</h2>
                <div className = "arrowKeysContainer">
                    <div className = "arrowKey arrowUp">
                        <img src = {ArrowUp} alt = "Arrow Up"></img>
                    </div>
                    <div className = "arrowKey">
                        <img src = {ArrowLeft} alt = "Arrow Left"></img>
                    </div>
                    <div className = "arrowKey">
                        <img src = {ArrowDown} alt = "Arrow Down"></img>
                    </div>
                    <div className = "arrowKey">
                        <img src = {ArrowRight} alt = "Arrow Right"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamePlayOptions;