import Main from './Main';
import {Container} from 'flux/utils';
import TodoActions from './TodoActions';
import TodoStore from './TodoStore';

function getStores() {
    return [
        TodoStore
    ];
}

function getState() {
    return {
        state: TodoStore.getState(),
        addTodo: TodoActions.addTodo,
    };
}

export default Container.createFunctional(Main, getStores, getState);
