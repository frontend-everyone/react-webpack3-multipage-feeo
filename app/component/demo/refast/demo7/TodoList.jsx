import React from 'react';
import Refast, {Component} from 'refast';
import LogicRender, {connect} from 'refast-logic-render';
import {Toast} from '../../../common/layer/Index';
// 引入 Store.js
import logic from './logic';
import List from './List';
import '../../../../public/css/todoList.pcss';

@connect
class TodoList extends Component {
    constructor(props) {
        super(props, logic);
    }

    render() {
        let {list, isLoading, isEmpty} = this.state, {dispatch} = this;
        return (
            <div className="todoList">
                <Toast ref={e => Refast.use('fn', {Toast: e})}/>
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.dispatch('handleAdd', this.refs['todoInput'].value)}>添加</button>
                <LogicRender
                    action={'getTodoList'}
                    isLoading={isLoading}
                    Loading={() => <div>加载中</div>}
                    isEmpty={isEmpty}
                    Empty={() => <div>暂无数据</div>}
                >
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
                </LogicRender>
            </div>
        )
    }
}

export default TodoList;