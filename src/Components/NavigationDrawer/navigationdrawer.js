import React from 'react';
import './navigationdrawer.css';
import ClassicIcon from '../../Icons/classic.svg';
import ReverseIcon from '../../Icons/reverse.svg';
import ClassicBlueIcon from '../../Icons/classicblue.svg';
import ReverseBlueIcon from '../../Icons/reverseblue.svg';
import Classic2048 from '../Classic2048/classic2048';
import Reverse2048 from '../Reverse2048/reverse2048';

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentGameName, isDrawerOpen, changeCurrentGame} = this.props;
        
        let style = {};
        if(isDrawerOpen) {
            style.left = "0%";
        }
        else {
            style.left = "-25%";
        }
        
        return (
            <div className = "navigationDrawer" style = {style}>
                <h4 className = "navigationItemGroupTitle">VARIANTS</h4>
                <div className = {currentGameName == 'CLASSIC2048' ? 'navigationItem active' : 'navigationItem'} onClick = {() => changeCurrentGame('CLASSIC2048')}>
                    <img src = {currentGameName == 'CLASSIC2048' ? ClassicBlueIcon : ClassicIcon}></img>
                    <div>Classic 2048</div>
                </div>
                <div className = {currentGameName == 'REVERSE2048' ? 'navigationItem active' : 'navigationItem'} onClick = {() => changeCurrentGame('REVERSE2048')}>
                    <img src = {currentGameName == 'REVERSE2048' ? ReverseBlueIcon : ReverseIcon}></img>
                    <div>Reverse 2048</div>
                </div>                
            </div>
        );
    }
}

export default NavigationDrawer;