import React from 'react'
import SlideTitle from '../components/SlideTitle'
import SlidePage from '../components/SlidePage'

const Slide = () => {
    const imageUrl = 'https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return (
        <SlidePage>
            <SlideTitle>How ticks the Internet</SlideTitle>
            <div>
                <p>Have you ever thought about how the Internet is ticking?</p>
                <p>Is it the same time everywhere in the world, or is it different in every country?</p>
                <div style={{ marginTop: '1.2em' }}>
                    <img src={imageUrl} alt="internet time" style={{ width: '80vmin' }} />
                </div>
                <div style={{ fontSize: '0.7em' }}>
                    Image Source: <a href="https://www.pexels.com/photo/computer-desk-196658/" target="_blank" rel="noopener noreferrer">picjumbo.com @ Pexels </a>
                </div>
            </div>
        </SlidePage>
    )
}

export default Slide;
