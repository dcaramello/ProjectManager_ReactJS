import React, { Component } from 'react';
import Projects from './projects';

class Main extends Component {

    render(){
        return (
            <div>
                <h2>Tous les projets</h2>
                <Projects />
                <h2>Détail d'un projet</h2>
            </div>
        )
    }
}

export default Main;