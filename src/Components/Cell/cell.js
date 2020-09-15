import React from 'react';
import './cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "cell"></div>
        );
    }
}

export default Cell;