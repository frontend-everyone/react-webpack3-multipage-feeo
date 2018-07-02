import React from 'react'
import Reflux from 'reflux'
import Action from './Action'
import Store from './Store'

class List extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = Store;
    }

    render() {
        let {list} = this.state;
        let type = this.props.type;
        let LiCont = ({data}) =>
            <li>
                {data.title}
                <button
                    onClick={() => Action.itemEdit({
                        id: data.id,
                        status: data.status === 1 ? 0 : 1
                    })}
                    className={data.status === 1 ? "del" : "recovery"}>
                    {data.status === 1 ? "删除" : "恢复"}
                </button>
            </li>
        ;
        return (
            <div className="list">
                {
                    list.length > 0 && list.map(data => [
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
        );
    }
}

class Index extends Reflux.Component {
    render() {
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => Action.addTodo(this.refs['todoInput'].value)}>添加
                </button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List type={2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

