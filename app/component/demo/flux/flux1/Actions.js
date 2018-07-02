import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
    add(text) {
        Dispatcher.dispatch({
      type: ActionTypes.ADD,
      text,
    });
  }
};

export default Actions;
