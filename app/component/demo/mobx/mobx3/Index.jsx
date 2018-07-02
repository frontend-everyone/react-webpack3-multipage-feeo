import React from 'react';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react';
import State from './State'

useStrict(true);
const newState = new State();

@observer
class Index extends React.Component {
    render() {
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => newState.add(this.refs['todoInput'].value)}>添加</button>
                {
                    newState.list.map(data =>
                        <li key={data.id}>
                            {data.title}
                            <button
                                onClick={() => newState.edit({
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
        )
    }
}

export default Index