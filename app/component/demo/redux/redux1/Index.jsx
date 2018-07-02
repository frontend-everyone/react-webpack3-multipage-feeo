import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import reducer from './reducer'

const store = createStore(reducer);

class Index extends React.Component {
    render() {
        return (
            <div>
                {this.props.storeState.num}
                <button onClick={() => this.props.dispatch({type: 'ADD', num: 1})}>+</button>
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