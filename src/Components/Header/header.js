import React from 'react';
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>2048</h2>
            </div>
        );
    }
}

export default Header;