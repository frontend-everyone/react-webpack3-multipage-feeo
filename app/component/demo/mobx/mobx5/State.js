import {observable, action, runInAction} from 'mobx';
import apiRequestAsync from '../../../../public/js/apiRequestAsync';

class State {
    @observable list = [];
    @action postList = async () => {
        let todoList = await apiRequestAsync.post('todoList');
        runInAction(() => {
            this.list = todoList.list;
        })
    };
    @action add = (title) => {
        if (title) {
            this.list.push({id: this.list.length + 1, title: title, status: 1});
        } else {
            alert('不能为空')
        }
    };
    @action edit = (obj) => {
        let {id, status} = obj;
        this.list.find(data => data.id === id).status = status;
    }
}

export default State
