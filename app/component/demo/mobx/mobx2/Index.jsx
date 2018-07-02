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
            <div>
                <input type="text" ref="todoInput"/>
                <button onClick={() => newState.add(this.refs['todoInput'].value)}>添加</button>
                {
                    newState.list.map(data => <li key={data.id}>{data.title}</li>)
                }
            </div>
        )
    }
}

export default Index