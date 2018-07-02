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
                            </li>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Index;

