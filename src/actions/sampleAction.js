// action
export const CHANGE_TO_GRAY = "CHANGE_TO_GRAY"
export const CHANGE_TO_RED = "CHANGE_TO_RED"
export const CHANGE_TO_YELLOW = "CHANGE_TO_YELLOW"
export const CALCURATE = "CALCURATE"

// action creator
export function changeToGray() {
    return{
        type:CHANGE_TO_GRAY
    }
}

export function changeToRed() {
    return {
        type:CHANGE_TO_RED
    }
}

export function changeToYellow() {
    return {
        type:CHANGE_TO_YELLOW
    }
}

export function calcurate (isPlus) {
    return {
        type:CALCURATE,
        isPlus : isPlus,
    }
}