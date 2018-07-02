export default (state = {
    list: []
}, action) => {
    let list = state.list;
    switch (action.type) {
        case 'POST_LIST':
            list = action.list;
            return {list};
        case 'ADD':
            if (!action.title) {
                alert('不能为空');
                return state;
            }
            list.push({id: state.list.length + 1, title: action.title, status: 1});
            return {list};
        case 'EDIT':
            let {id, status} = action.obj;
            list.find(data => data.id === id).status = status;
            return {list};
        default:
            return state;
    }
};
