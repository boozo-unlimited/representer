import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { SlidesStore, SlidesState } from '../reducers/slidesReducer'

// Create selector which returns 'currentSlides' variable from redux 'slides' store.
export const currentSlideSelector = createSelector<SlidesStore, SlidesState, number>(state => state.slides,
    (slides) => { return slides.currentSlide; });

// Create react hook which allows to use 'currentSlides' variable 
// directly in react function component.
export const useCurrentSlideSelector = () => useSelector(currentSlideSelector);

// Selector and hook to get the number of slides in the slide show
export const slideCountSelector = createSelector<SlidesStore, SlidesState, number>(state => state.slides,
    (slides) => { return slides.count; });
export const useSlideCountSelector = () => useSelector(slideCountSelector);
