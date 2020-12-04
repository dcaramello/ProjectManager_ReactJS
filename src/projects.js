import React, { Component } from 'react';
import ProjectsData from "./data.json";

class Projects extends Component {

    render() {	

		return(
            <div className="container">
                {ProjectsData.map( (param) => {
                    return (
                        <div className="card mx-2 my-3" style={{width: "18rem"}}>
                            <div className="card-header">
                            Titre: {param.title}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Description: {param.description}</li>
                                <li className="list-group-item">Enregistré le: {param.registered}</li>
                                <li className="list-group-item">Deadline: {param.deadline}</li>
                            </ul>
                        </div> 
                    )
                })}
            </div>    
        )
    }
}
export default Projects;