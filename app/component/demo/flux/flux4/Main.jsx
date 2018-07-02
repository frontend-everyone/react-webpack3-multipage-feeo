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
        let {ItemEdit,type} = this.props;
        let LiCont = ({data}) =>
            <li>
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
        ;
        return (
            <div className="list">
                {
                    list.length > 0 && list.map(data => [
                            type === 0 ?
                                <LiCont data={data} key={data.id}/>
                                :
                                type === 1 && data.status === 1 ?
                                    <LiCont data={data} key={data.id}/>
                                    :
                                    type === 2 && data.status === 0 ?
                                        <LiCont data={data} key={data.id}/>
                                        :
                                        null
                        ]
                    )
                }
            </div>
        );
    }
}

const Index = (props) =>
    <div className="todoList">
        <Input {...props}/>
        <div className="cont">
            <div className="box">
                全部
                <List {...props} type={0}/>
            </div>
            <div className="box">
                未删除
                <List {...props} type={1}/>
            </div>
            <div className="box">
                已删除
                <List {...props} type={2}/>
            </div>
        </div>
    </div>
;
export default Index;