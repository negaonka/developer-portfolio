import React from 'react';
import NehaPhoto from  "../../assets/cover/NehaPhoto.png";

function About(){
    return (
        <section className="my-5">
            <img src={NehaPhoto} className="py-2" 
                style={{ width: "25%", display: "block",marginLeft: "auto", marginRight: "auto"}} alt="cover" />
            <h5 id="about" 
                style={{ textAlign: "center", padding: "20px" }}>
                Hardworking software development professional driven to increase team effectiveness. Focused on 
                usability and performance improvements. Proven history of developing useful, efficient, and cost-effective 
                projects.<br/>
                5+ years of experience in software industry, in gathering requirements, interacting with clients to 
                understand requirements, and developing a web application. Currently associated with RippleHire 
                as Senior Software Developer.
                Hands on experience in developing Web Applications using Spring MVC, Spring Boot, Web 
                Services, Web API, Microservices, SQL Server, JavaScript, Angular.
                Good problem-solving skills with high aptitude to follow logic control.
                Strong communication, interpersonal and time management skills with good work ethics.
            </h5>
        </section>
    )
}

export default About