import React from 'react';
import './header.css'
import GitHubIcon from '../../Icons/githubicon.svg';
import MenuIcon from '../../Icons/menu.svg';
import CloseIcon from '../../Icons/close.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isDrawerOpen, toggleNavigationDrawer} = this.props;

        let icon = MenuIcon;
        if(isDrawerOpen) {
            icon = CloseIcon;
        }

        return (
            <div className = "header">
                <div className = "menuIcon" onClick = {toggleNavigationDrawer}>
                    <img src = {icon} alt = "Menu Icon"></img>
                </div>
                <h2 className = "title">2048</h2>
                <a className = "githubicon" href = "https://github.com/VaibhavDomadia/game-2048" title = "Link to the Repository">
                    <img src = {GitHubIcon} alt = "Github Link to the Project"></img>
                </a>
            </div>
        );
    }
}

export default Header;