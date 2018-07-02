// Refast 使用 logic.js 中 defaults 方法的返回值初始化组件的 state
export default {
    // defaults 的参数 props 是组件初始化时的 props
    // defaults 函数返回的对象会用来初始化组件的 state
    defaults(props) {
        return {
            list: []
        }
    },
    handleAdd({getState, setState}, title) {
        if (title) {
            let list = getState().list;
            list.push({id: list.length + 1, title: title, status: 1});
            setState({list: list});
        } else {
            alert('不能为空')
        }
    },
    handleItemEdit({getState, setState}, someState) {
        let {id, status} = someState, list = getState().list;
        list.find(data => data.id === id).status = status;
        setState({list: list})
    }
}

