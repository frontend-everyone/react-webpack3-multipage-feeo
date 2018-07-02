import {observable, action} from 'mobx';

class State {
    @observable list = [];
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
