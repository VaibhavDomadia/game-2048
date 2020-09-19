import React from 'react';
import './navigationdrawer.css';

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isDrawerOpen} = this.props;
        
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
                <div className = "navigationItem">Classic 2048</div>
                <div className = "navigationItem">Reverse 2048</div>
            </div>
        );
    }
}

export default NavigationDrawer;