export default (state = {
    list: []
}, action)=> {
    switch (action.type) {
        /*业务模型判断*/
        case 'ADD':
            if (!action.title) {
                alert('不能为空');
                return state;
            }
            let list = state.list;
            list.push({id: state.list.length + 1, title: action.title, status: 1});
            return {list};
        default:
            return state;
    }
};
