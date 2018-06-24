import {
    LOAD_PLANET_DATA
} from './../actions/types';

const INITIAL_STATE = {
    planetList: []
};

export default (state = INITIAL_STATE, action) => {
    console.log('load palent data:',action.data)
    switch (action.type) {
        case LOAD_PLANET_DATA:
            return {
                ...state,
                planetList: action.payload
            };    
        default:
            return state;
    }
};
