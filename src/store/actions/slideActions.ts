import { PERSIST, REHYDRATE } from 'redux-persist'
import { SET_SLIDE_COUNT, SLIDE_FIRST, SLIDE_NEXT, SLIDE_PREV, SLIDE_LAST } from './types'
export { SET_SLIDE_COUNT, SLIDE_FIRST, SLIDE_NEXT, SLIDE_PREV, SLIDE_LAST } from './types'

export interface SlideAction {
    type: typeof SLIDE_NEXT | typeof SLIDE_FIRST | typeof SLIDE_PREV | typeof SET_SLIDE_COUNT | typeof SLIDE_LAST | typeof PERSIST | typeof REHYDRATE;
    payload?: any;
}

export function setSlideCount(count: number) {
    return {
        type: SET_SLIDE_COUNT,
        payload: count
    }
}

export function firstSlide() {
    return { type: SLIDE_FIRST }
}

export function nextSlide() {
    return { type: SLIDE_NEXT }
}

export function prevSlide() {
    return { type: SLIDE_PREV }
}

export function lastSlide() {
    return { type: SLIDE_LAST }
}
