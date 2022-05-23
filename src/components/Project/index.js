import React from 'react';
import github from '../../assets/github.png'

function Project({developer}){
    return(
    <div >
        <div className="container">
            <img alt='developer' src={developer.image} width="500px" height="300px"/> 
            <div className="middle">
                <a href={developer.github} target="_blank" rel="noreferrer">  
                    <img alt='github' src={github} width="40px" height="40px"/>
                </a>
                <a href={developer.application} target="_blank" rel="noreferrer" >  
                   <p>{developer.name}</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Project;