import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store'
import List from './List'
import {postList} from './action'

class Index extends React.Component {
    componentDidMount() {
        this.props.dispatch(postList());
    }

    render() {
        let props = this.props;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.props.dispatch({type: 'ADD', title: this.refs['todoInput'].value})}>添加
                </button>
                <div className="cont">
                    <div className="box">
                        全部
                        <List type={0} {...props}/>
                    </div>
                    <div className="box">
                        未删除
                        <List type={1} {...props}/>
                    </div>
                    <div className="box">
                        已删除
                        <List type={2} {...props}/>
                    </div>
                </div>
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