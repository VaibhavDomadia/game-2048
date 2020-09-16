import React from 'react';
import './cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value} = this.props;

        let backgroundColor = '#ffffff';

        switch(value) {
            case 2:
                backgroundColor = '#32a852';
                break;
            case 4:
                backgroundColor = '#3ccfcf';
                break;
            case 8:
                backgroundColor = '#ea4335';
                break;
            case 16:
                backgroundColor = '#fbbc05';
                break;
            case 32:
                backgroundColor = '#1389fd';
                break;
            case 64:
                backgroundColor = '#7a58fc';
                break;
            case 128:
                backgroundColor = '#3ddc84';
                break;
            case 256:
                backgroundColor = '#f47100';
                break;
            case 512:
                backgroundColor = '#ee6e73';
                break;
            case 1024:
                backgroundColor = '#10536e';
                break;
            case 2048:
                backgroundColor = '#404040';
                break;
            default:
                backgroundColor = '#ffffff';
        }

        let style = {
            backgroundColor
        }

        if(value != 0) {
            style.boxShadow = "2px 2px 24px rgba(0, 0, 0, 0.2)";
        }

        return (
            <div className = "cell" style = {style}>{value == 0 ? "" : value}</div>
        );
    }
}

export default Cell;