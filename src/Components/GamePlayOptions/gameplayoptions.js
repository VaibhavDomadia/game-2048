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
            <div>
                <h2>Use Arrow Keys to Play</h2>
                <div>
                    <div>
                        <img src = {ArrowUp} alt = "Arrow Up"></img>
                    </div>
                    <div>
                        <img src = {ArrowLeft} alt = "Arrow Left"></img>
                    </div>
                    <div>
                        <img src = {ArrowDown} alt = "Arrow Down"></img>
                    </div>
                    <div>
                        <img src = {ArrowRight} alt = "Arrow Right"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamePlayOptions;