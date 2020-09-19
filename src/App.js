import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import NavigationDrawer from './Components/NavigationDrawer/navigationdrawer';
import Classic2048 from './Components/Classic2048/classic2048'

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
                <Classic2048/>
            </div>
        );
    }
}

export default App;
