import React from 'react';
import './Slides.css';

export default function Slide(props){

        let imageUrl = require(`../../Images/${props.id}.jpg`);
        const styles = {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }

        return (
            <div className="slide-container" style={styles}>
                <h2>{props.name}</h2>
            </div>
        )
}
