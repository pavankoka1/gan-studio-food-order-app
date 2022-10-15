import { SET_CART } from './types'

const INITIAL_STATE = JSON.parse(localStorage.getItem('cart'))

export default function locale(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CART:
            return action.payload
        default:
            return state
    }
}
