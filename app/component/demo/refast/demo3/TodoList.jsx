import React from 'react';
import {Component} from 'refast';
// 引入 Store.js
import logic from './logic';
import '../../../../public/css/todoList.pcss';

class TodoList extends Component {
    constructor(props) {
        super(props, logic);
    }

    render() {
        let {list} = this.state;
        let LiCont = ({data}) =>
            <li>
                {data.title}
                <button
                    onClick={() => this.dispatch('handleItemEdit', {
                        id: data.id,
                        status: data.status === 1 ? 0 : 1
                    })}
                    className={data.status === 1 ? "del" : "recovery"}>
                    {data.status === 1 ? "删除" : "恢复"}
                </button>
            </li>
        ;
        let ListCont = ({type}) =>
            <div className="list">
                {
                    list.map(data => [
                            type === 0 ?
                                <LiCont data={data} key={data.id}/>
                                :
                                type === 1 && data.status === 1 ?
                                    <LiCont data={data} key={data.id}/>
                                    :
                                    type === 2 && data.status === 0 ?
                                        <LiCont data={data} key={data.id}/>
                                        :
                                        null
                        ]
                    )
                }
            </div>
        ;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.dispatch('handleAdd', this.refs['todoInput'].value)}>添加</button>
                <div className="cont">
                    <div className="box">
                        全部
                        <ListCont type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <ListCont type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <ListCont type={2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;