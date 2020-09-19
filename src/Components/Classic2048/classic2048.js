import React from 'react';
import GameArena from '../GameArena/gamearena';

class Classic2048 extends React.Component {
    constructor(props) {
        super(props);

        this.generateRandomCellValue = this.generateRandomCellValue.bind(this);
        this.getMergedCellValue = this.getMergedCellValue.bind(this);
        this.getScoreFromMerging = this.getScoreFromMerging.bind(this);
    }

    /**
     * This function is used to generate either 2 or 4 using random number generator.
     * 
     * @returns 2 or 4 as value.
     */
    generateRandomCellValue() {
        let value = Math.floor(Math.random()*2) + 1;
        return value * 2;
    }

    /**
     * This function compute and returns value of the new cell based on the cells that are being merged.
     * 
     * @param valueToBeMerged represent the value in both of the cell that is to be merged.
     * 
     * @returns new cell value
     */
    getMergedCellValue(valueToBeMerged) {
        return valueToBeMerged * 2;
    }

    /**
     * This function returns the value that has been scored because of merging the cells.
     * 
     * @param valueToBeMerged represent the value in both of the cell that is to be merged.
     * 
     * @returns score to add to previous score.
     */
    getScoreFromMerging(valueToBeMerged) {
        return valueToBeMerged * 2;
    }

    render() {
        return (
            <GameArena gameWonCellValue = {2048} generateRandomCellValue = {this.generateRandomCellValue} getMergedCellValue = {this.getMergedCellValue} getScoreFromMerging = {this.getScoreFromMerging}/>
        );
    }
}

export default Classic2048;