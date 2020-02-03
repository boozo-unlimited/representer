import React from 'react'
import SlideTitle from '../components/SlideTitle'
import SlidePage from '../components/SlidePage'

const Slide = () => (
    <SlidePage>
        <SlideTitle>Slide One</SlideTitle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore at natus labore, exercitationem sed, debitis alias tenetur esse accusamus, aut eius deserunt quibusdam. Temporibus sed sint magni quae adipisci!</p>
        <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            Favicon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    </SlidePage>
)

export default Slide;
