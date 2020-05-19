import {createStore} from 'redux';
import reducer from './reducers';

export default function initStore(){
    const store = createStore(
        reducer
    )

    return store
} 