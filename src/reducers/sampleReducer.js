import * as types from '../actions/sampleAction'

// state
const initialState = {
    backgroundColor:'gray',
    counter:0
};

// reducer
export default (state = initialState, action) => {
    switch (action.type){
        case types.CHANGE_TO_GRAY :
            return {
                ...state,
                backgroundColor : 'gray'
            }
        case types.CHANGE_TO_RED:
            return {
                ...state,
                backgroundColor : 'red'
            }
        case types.CHANGE_TO_YELLOW:
            return {
                ...state,
                backgroundColor : 'yellow'
            }
        case types.CALCURATE:
            return {
                ...state,
                counter: action.isPlus === true ? state.counter + 1 : state.counter - 1
            }
        default :
            return state;
    }
}