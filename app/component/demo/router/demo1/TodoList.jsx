/**
 * Created by Kirk liu on 2018/1/3.
 */
import React from 'react';
import '../../../../public/css/todoList.pcss';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    handleAdd = () => {
        let item = this.refs['todoInput'].value;
        if (item) {
            let list = this.state.list;
            list.push({id: list.length + 1, title: item, status: 1});
            this.setState({list: list}, () => console.log(this.state.list))
        } else {
            alert('不能为空')
        }
    };

    handleItemDel(id) {
        let list = this.state.list;
        list.find(data => data.id === id).status = 0;
        this.setState({list: list})
    }

    componentDidMount() {

    }

    render() {
        let {list} = this.state;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={this.handleAdd}>添加</button>
                <div className="list">
                    {
                        list.map(data => [
                            data.status === 1 ?
                                <li key={data.id}>
                                    {data.title}
                                    <button onClick={() => this.handleItemDel(data.id)}>删除</button>
                                </li>
                                :
                                null
                        ])
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;