import React from 'react';
import './cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value} = this.props;

        return (
            <div className = "cell">{value}</div>
        );
    }
}

export default Cell;