import React from 'react';
import './navigationdrawer.css';

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
            style.left = "-20%";
        }
        
        return (
            <div className = "navigationDrawer" style = {style}>
                <h4 className = "navigationItemGroupTitle">VARIANTS</h4>
                <div className = {currentGameName == 'CLASSIC2048' ? 'navigationItem active' : 'navigationItem'} onClick = {() => changeCurrentGame('CLASSIC2048')}>Classic 2048</div>
                <div className = {currentGameName == 'REVERSE2048' ? 'navigationItem active' : 'navigationItem'} onClick = {() => changeCurrentGame('REVERSE2048')}>Reverse 2048</div>
            </div>
        );
    }
}

export default NavigationDrawer;