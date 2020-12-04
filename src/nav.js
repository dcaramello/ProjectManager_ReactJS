import React, { Component } from 'react';

class Nav extends Component{

handleIndex = e => {
    console.log('index')
}
handleArchive = e => {
    console.log('archive')
}
handleNewProject = e => {
    console.log('nouveau projet')
}

    render(){

        return (
            <div>
                <button onClick={this.handleIndex} className="btn btn-danger mx-3" >Titre / accueil</button>
                <button onClick={this.handleArchive} className="btn btn-danger mx-3">Archives</button>
                <button onClick={this.handleNewProject} className="btn btn-danger mx-3">Nouveau projet</button>
            </div>
        )
    }

}

export default Nav;