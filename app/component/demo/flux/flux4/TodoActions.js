import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
    ItemEdit(obj) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ITEM_EDIT,
            obj,
        });
    }
};

export default Actions;
