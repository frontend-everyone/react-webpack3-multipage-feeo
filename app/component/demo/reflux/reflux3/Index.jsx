import React from 'react'
import Reflux from 'reflux'
import Action from './Action'
import Store from './Store'

class Index extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = Store;
    }

    render() {
        let list = this.state.list;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => Action.addTodo(this.refs['todoInput'].value)}>添加
                </button>
                <div>
                    {
                        list.length > 0 && list.map(data =>
                            <li key={data.id}>
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
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Index;

