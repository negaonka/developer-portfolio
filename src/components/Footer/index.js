import React from 'react';
import github from '../../assets/social/github.png';
import linkdln from '../../assets/social/linkdln.jfif';
import stackOverflow from '../../assets/social/stackOverflow.jfif';

function Footer(){

    const footerImages = [{name: github}, {name: linkdln}, {name: stackOverflow}]
    return(
        <footer>
            <div className="flex-row" style={{justifyContent: "center"}}>

            {footerImages.map((footerImage) => (
             <img src={footerImage.name} className="px-1 py-1 img-thumbnail mx-1"
             style={{ width: "60px", height: "60px"}} alt="cover" />
            ))}
            </div>
        </footer>
    )
}

export default Footer;