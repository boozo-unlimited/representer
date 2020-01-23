import { SLIDE_NEXT, SLIDE_PREV, SET_SLIDE_COUNT, SLIDE_FIRST, SLIDE_LAST } from '../actions/types'
import { SlideAction } from '../actions/slideActions'
import { PERSIST, REHYDRATE } from 'redux-persist';

export interface SlidesStore {
    slides: SlidesState;
}

export interface SlidesState {
    count: number;
    currentSlide: number;
}

const initialState: SlidesState = {
    count: 0,                           ///< Number of available slides
    currentSlide: 0                     ///< Current visible slide (starting from index 0)
}

export default function (state = initialState, action: SlideAction) {

    const lastSlide = state.count - 1;

    switch (action.type) {
        case SET_SLIDE_COUNT:
            {
                return {
                    ...state,
                    count: action.payload
                }
            }
        case SLIDE_FIRST:
            {
                return {
                    ...state,
                    currentSlide: 0
                };
            }
        case SLIDE_NEXT:
            {
                const nextSlide = Math.min(state.currentSlide + 1, lastSlide);
                return {
                    ...state,
                    currentSlide: nextSlide
                };
            }
        case SLIDE_PREV:
            {
                const nextSlide = Math.max(state.currentSlide - 1, 0);
                return {
                    ...state,
                    currentSlide: nextSlide
                };
            }
        case SLIDE_LAST:
            {
                return {
                    ...state,
                    currentSlide: lastSlide
                };
            }
        case PERSIST:
            return state;
        case REHYDRATE:
            return state;
        default:
            if (!"@@INIT")
                console.log('Unknown action');
            return state;
    }
}
