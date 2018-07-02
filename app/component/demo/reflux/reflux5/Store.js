import Reflux from 'reflux'
import Action from './Action'
import apiRequestAsync from '../../../../public/js/apiRequestAsync';

class Store extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Action;
        this.state = {
            list: []
        }
    }

    async onPostList() {
        let todoList = await apiRequestAsync.post('todoList');
        this.setState({list: todoList.list});
    }

    onAddTodo(title) {
        if (!title) {
            alert('内容不能为空');
        } else {
            let list = this.state.list;
            list.push({id: list.length + 1, title: title, status: 1});
            this.setState({list: list});
        }
    }

    onItemEdit(obj) {
        let {id, status} = obj;
        let list = this.state.list;
        list.find(data => data.id === id).status = status;
        this.setState({list: list});
    }
}

export default Store;