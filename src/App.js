import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import NavigationDrawer from './Components/NavigationDrawer/navigationdrawer';
import Classic2048 from './Components/Classic2048/classic2048';
import Reverse2048 from './Components/Reverse2048/reverse2048';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            currentGameName: 'CLASSIC2048'
        }

        this.toggleNavigationDrawer = this.toggleNavigationDrawer.bind(this);
        this.changeCurrentGame = this.changeCurrentGame.bind(this);
    }

    changeCurrentGame(newGame) {
        this.setState({currentGameName: newGame});
    }

    toggleNavigationDrawer() {
        this.setState((prevousState, props) => {
            return {isDrawerOpen: !prevousState.isDrawerOpen};
        });
    }

    render() {
        let currentGame;
        switch(this.state.currentGameName) {
            case 'CLASSIC2048':
                currentGame = <Classic2048/>
                break;
            case 'REVERSE2048':
                currentGame = <Reverse2048/>
        }

        return (
            <div>
                <Header isDrawerOpen = {this.state.isDrawerOpen} toggleNavigationDrawer = {this.toggleNavigationDrawer}/>
                <NavigationDrawer currentGameName = {this.state.currentGameName} isDrawerOpen = {this.state.isDrawerOpen} changeCurrentGame = {this.changeCurrentGame}/>
                {currentGame}
            </div>
        );
    }
}

export default App;
