import React from 'react';
import './header.css'
import GitHubIcon from '../../Icons/githubicon.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>2048</h2>
                <a href = "https://github.com/VaibhavDomadia/game-2048" title = "Link to the Repository">
                    <img src = {GitHubIcon} alt = "Github Link to the Project"></img>
                </a>
            </div>
        );
    }
}

export default Header;