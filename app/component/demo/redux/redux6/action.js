import apiRequestAsync from '../../../../public/js/apiRequestAsync';

export const postList = () => async (dispatch) => {
    let todoList = await apiRequestAsync.post('todoList');
    dispatch({type: 'POST_LIST', list: todoList.list});
};