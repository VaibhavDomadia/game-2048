import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header'
import GameArena from './Components/GameArena/gamearena';
import GamePlayOptions from './Components/GamePlayOptions/gameplayoptions';
import ScoreBoard from './Components/ScoreBoard/scoreboard';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <ScoreBoard/>
            </div>
        );
    }
}

export default App;
