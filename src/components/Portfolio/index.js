import React, { useState} from 'react';
import Project from '../Project';
import developer1 from  "../../assets/developer_images/developer1.jfif";
import developer2 from  "../../assets/developer_images/developer2.jfif";
import developer3 from  "../../assets/developer_images/developer3.jfif";
import developer4 from  "../../assets/developer_images/developer4.jfif";
import developer5 from  "../../assets/developer_images/developer5.jfif";
import developer6 from  "../../assets/developer_images/developer6.jfif";

function Portfolio(){

    const [developers] = useState([
        {
            image: developer1,
            application:"http://negaonka.github.io/photo-portfolio",
            github:"https://github.com/negaonka/photo-portfolio",
            name: "Photo Portfolio"
        },
        {
            image: developer2,
            application:"http://negaonka.github.io/photo-portfolio",
            github:"https://github.com/negaonka/photo-portfolio",
            name: "Photo Portfolio"
        },
        {
            image: developer3,
            application:"https://negaonka.github.io/hangman",
            github:'https://github.com/negaonka/hangman',
            name: "Technical LOL"
        },
        {
            image: developer4,
            application:"http://negaonka.github.io/SmartVolunteer",
            github:"https://github.com/negaonka/SmartVolunteer",
            name: "Smart Volunteer"
        },
        {
            image: developer5,
            application:"http://negaonka.github.io/photo-portfolio",
            github:"https://github.com/negaonka/photo-portfolio",
            name: "Photo Portfolio Test"
        },
        {
            image: developer6,
            application:"http://negaonka.github.io/SmartVolunteer",
            github:"https://github.com/negaonka/SmartVolunteer",
            name: "Smart Volunteer"
        }
      ]);

    return (
        <>
            <h1 data-testid="h1tag">Portfolio</h1>
            <div className="flex-row">
                {developers.map((developer) => (
                <Project developer = {developer}/>
            ))}
            </div>
      </>
    )

}

export default Portfolio;