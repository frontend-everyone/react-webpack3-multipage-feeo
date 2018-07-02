import React from 'react';

class Input extends React.Component {
    render() {
        let {addTodo} = this.props;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => addTodo(this.refs['todoInput'].value)}>添加
                </button>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        let {list} = this.props.state;
        let {ItemEdit} = this.props;
        return (
            <div>
                {
                    list.length > 0 && list.map(data =>
                        <li key={data.id}>
                            {data.title}
                            <button
                                onClick={() => ItemEdit({
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
        );
    }
}

const Index = (props) =>
    <div className="todoList">
        <Input {...props}/>
        <List {...props}/>
    </div>
;
export default Index;