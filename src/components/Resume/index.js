import React from 'react'
import resume from '../../assets/data/ResumeNehaGaonkar.pdf';

function Resume(){
    const frontEndList = [{name: 'JavaScript'}, {name: 'JQuery'}, {name: 'Ajax'}, {name: 'Angular'}, {name: 'HTML'}, {name:'CSS'}, {name: 'React'}];
    const backEndList = [{name: 'Java'}, {name: 'Node'}, {name: 'Hibernate'}, {name: 'Web-services'},{name: 'Oracle'}, {name: 'MY-SQL'}];
    return(
        <>
        <section>
        <h1 data-testid="h1tag">Resume</h1>
        <div>
        <h5>Download my<a style={{color:"#86868b"}} href={resume} download="ResumeNehaGaonkar.pdf"><h5>resume</h5></a></h5>
        </div>
        </section>
        <section>
            <h2>UI Technologies</h2>
            <ul>
            {frontEndList.map((technology) => (
            <li style={{listStyle: "circle"}} key={technology.name}>{technology.name}</li> 
            ))}
            </ul>
            <h2>BackEnd Technologies</h2>
            <ul>
            {backEndList.map((technology) => (
            <li style={{listStyle: "circle"}} key={technology.name}>{technology.name}</li> 
            ))}
            </ul>
        </section>
        </>
    )
}

export default Resume