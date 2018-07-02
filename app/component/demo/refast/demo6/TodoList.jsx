import React from 'react';
import Refast, {Component} from 'refast';
import {Toast} from '../../../common/layer/Index';
// 引入 TodoStore.js
import logic from './logic';
import List from './List';
import '../../../../public/css/todoList.pcss';

const logState = ctx => next => (...args) => {
    //console.log('######### PRINT STATE LOG #########');
    //console.log('ctx:', ctx.getState().list, new Date().getTime());
    //console.log('args:', args[0].list, new Date().getTime());
    if (!args[0].back) {
        let refast_todoList_log = JSON.parse(localStorage.getItem('refast-todoList-log'));
        refast_todoList_log.push(args[0].list);
        localStorage['refast-todoList-log'] = JSON.stringify(refast_todoList_log);
    }
    // 如果不执行 next， 则中止组件 state 更新
    next(...args);
};
// logState 可以是一个函数
// 也可以是一个函数组, 从前到后依次执行
Refast.use('middleware', [logState]);

class TodoList extends Component {
    constructor(props) {
        super(props, logic);
    }

    componentDidMount() {
        localStorage.setItem('refast-todoList-log', JSON.stringify([[]]));
        this.dispatch('getTodoList');
    }

    render() {
        let {list, step} = this.state, {dispatch} = this;
        let refast_todoList_log = JSON.parse(localStorage.getItem('refast-todoList-log'));
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
                <div style={{width: '100%', float: 'left', marginTop: 30}}>
                    一共{refast_todoList_log && refast_todoList_log.length}步,当前第 {step} 步
                    <button onClick={() => {
                        if (step >= 2) {
                            this.dispatch('back', refast_todoList_log[step - 2], step - 1)
                        } else {
                            alert('不能再后退了')
                        }
                    }}>后退
                    </button>
                    <button onClick={() => {
                        if (step < refast_todoList_log.length) {
                            this.dispatch('back', refast_todoList_log[step], step + 1)
                        } else {
                            alert('不能再前进了')
                        }
                    }}>前进
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoList;