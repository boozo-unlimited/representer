import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSlideCount } from '../store/actions/slideActions'
import { useCurrentSlideSelector } from '../store/selectors/slides'
import slides from '../slides'

interface Props {

}

const Presentation: React.FC<Props> = (props) => {

    const currentSlide = useCurrentSlideSelector();
    const CurrentSlide = slides[currentSlide];
    const dispatch = useDispatch();                         // Function to send action to redux store

    // Initialize slides 'count' variable
    useEffect(() => {
        dispatch(setSlideCount(slides.length))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* Show actual slide */}
            <CurrentSlide />
        </>
    )
}

export default Presentation;
