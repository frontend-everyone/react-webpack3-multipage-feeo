import React from 'react';
import Refast, {Component} from 'refast';
import {Toast} from '../../../common/layer/Index';
// 引入 Store.js
import logic from './logic';
import List from './List';
import '../../../../public/css/todoList.pcss';

class TodoList extends Component {
    constructor(props) {
        super(props, logic);
    }

    componentDidMount() {
        this.dispatch('getTodoList');
    }

    render() {
        let {list} = this.state, {dispatch} = this;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.dispatch('handleAdd', this.refs['todoInput'].value)}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List type={0} list={list} dispatch={dispatch}/>
                    </div>
                    <div className="box">
                        未删除
                        <List type={1} list={list} dispatch={dispatch}/>
                    </div>
                    <div className="box">
                        已删除
                        <List type={2} list={list} dispatch={dispatch}/>
                    </div>
                </div>
                <Toast ref={e => Refast.use('fn', {Toast: e})}/>
            </div>
        );
    }
}

export default TodoList;