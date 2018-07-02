export default (state = {
    num: 0
}, action)=> {
    switch (action.type) {
        case 'ADD':
            return {num:state.num + action.num};
        default:
            return state;
    }
};
