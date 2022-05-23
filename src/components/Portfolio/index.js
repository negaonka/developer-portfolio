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
            application:"https://api.github.com/users/mojombo",
            github:"https://github.com/mojombo",
            name: "Plantonic Game"
        },
        {
            image: developer2,
            application:"https://api.github.com/users/defunkt",
            github:"https://github.com/defunkt",
            name: "Game Kaboolush"
        },
        {
            image: developer3,
            application:"https://api.github.com/users/pjhyett",
            github:'https://github.com/pjhyett',
            name: "Technical LOL"
        },
        {
            image: developer4,
            application:"https://api.github.com/users/wycats",
            github:'https://github.com/wycats',
            name: "Smart Kitten"
        },
        {
            image: developer5,
            application:"https://api.github.com/users/ezmobius",
            github:'https://github.com/ezmobius',
            name: 'Zombie Sculpture'
        },
        {
            image: developer6,
            application:"https://api.github.com/users/ivey",
            github:'https://github.com/ivey',
            name: 'Fitness Money'
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