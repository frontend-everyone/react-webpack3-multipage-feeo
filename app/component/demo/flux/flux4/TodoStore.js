import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoEditStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return {list: []};
    }

    reduce(state, action) {
        let list = state.list;
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text) {
                    alert('内容不能为空');
                    return state;
                }
                list.push({id: state.list.length + 1, title: action.text, status: 1});
                return {list};
            case TodoActionTypes.ITEM_EDIT:
                let {id,status} = action.obj;
                list.find(data => data.id === id).status = status;
                return {list};
            default:
                return state;
        }
    }
}

export default new TodoEditStore();
