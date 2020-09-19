import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header'
import GameArena from './Components/GameArena/gamearena';
import NavigationDrawer from './Components/NavigationDrawer/navigationdrawer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        }

        this.toggleNavigationDrawer = this.toggleNavigationDrawer.bind(this);
    }

    toggleNavigationDrawer() {
        this.setState((prevousState, props) => {
            return {isDrawerOpen: !prevousState.isDrawerOpen};
        });
    }

    render() {
        return (
            <div>
                <Header isDrawerOpen = {this.state.isDrawerOpen} toggleNavigationDrawer = {this.toggleNavigationDrawer}/>
                <NavigationDrawer isDrawerOpen = {this.state.isDrawerOpen}/>
                <GameArena/>
            </div>
        );
    }
}

export default App;
