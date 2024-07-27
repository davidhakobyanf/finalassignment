import React from 'react';
import css from './Homde.module.css'
import img1 from '../../images/aerial-2203634_1920.jpg'
import img2 from '../../images/lights-2203654_1920.jpg'
import img3 from '../../images/large-wool-sliders-in-flight-5270891_1920.jpg'
import img4 from '../../images/music-701238_1920.jpg'
import {Slide} from "react-slideshow-image";


const Home = () => {
    const spanStyle = {
        // padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '90vh',
        backgroudRepeat: 'no-repeat',


    }
    const slideImages = [
        {
            url: `${img1}`,
            caption: 'Slide 1'
        },
        {
            url: `${img2}`,
            caption: 'Slide 2'
        },
        {
            url: `${img3}`,
            caption: 'Slide 3'
        },
        {
            url: `${img4}`,
            caption: 'Slide 4'
        },
    ];
    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default Home;