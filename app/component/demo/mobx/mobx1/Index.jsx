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
                <p>num1: {newState.num1}</p>
                <button onClick={newState.addNum1}>num1+1</button>
                <p>num2: {newState.num2}</p>
                <button onClick={newState.addNum2}>num2+1</button>
                <p>total:{newState.total}</p>
            </div>
        )
    }
}

export default Index