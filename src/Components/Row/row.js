import React from 'react';
import './row.css';
import Cell from '../Cell/cell'

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cellValues} = this.props;

        return (
            <div className = "row">
                {
                    cellValues.map((cell, index) => <Cell key = {index} value = {cell}/>)
                }
            </div>
        );
    }
}

export default Row;