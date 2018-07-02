import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import reducer from './reducer'

const store = createStore(reducer);

class Index extends React.Component {
    render() {
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.props.dispatch({type: 'ADD', title: this.refs['todoInput'].value})}>添加
                </button>
                {
                    this.props.storeState.list.map(data => <li key={data.id}>{data.title}</li>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({storeState: state});

const Main = connect(
    mapStateToProps
)(Index);

export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>
;