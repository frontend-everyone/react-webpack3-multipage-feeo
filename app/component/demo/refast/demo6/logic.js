import apiRequestAsync from '../../../../public/js/apiRequestAsync';

export default {
    defaults(props) {
        return {
            list: [],
            step: 1,
            back: false
        }
    },
    back({setState}, data, step) {
        setState({back: true, list: data, step: step})
    },
    handleAdd({getState, setState}, title) {
        if (title) {
            let list = getState().list;
            list.push({id: list.length + 1, title: title, status: 1});
            setState({list: list, step: getState().step + 1, back: false});
        } else {
            alert('不能为空')
        }
    },
    handleItemEdit({getState, setState}, someState) {
        let {id, status} = someState, list = getState().list;
        list.find(data => data.id === id).status = status;
        setState({list: list, step: getState().step + 1, back: false})
    },
    async getTodoList({setState, fn}) {
        let todoList = {};
        try {
            todoList = await apiRequestAsync.post('todoList');
            fn.Toast.show('操作成功');
            setState({list: todoList.list, step: 2});
        } catch (error) {
            fn.Toast.show(error);
        }
    }
}