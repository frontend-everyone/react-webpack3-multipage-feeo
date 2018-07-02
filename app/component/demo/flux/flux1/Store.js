import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class TodoEditStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return 0;
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD:
                return state + action.text;
            default:
                return state;
        }
    }
}

export default new TodoEditStore();
