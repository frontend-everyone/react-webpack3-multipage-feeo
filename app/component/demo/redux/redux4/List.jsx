import React from 'react';

class List extends React.Component {
    render() {
        let {list} = this.props.storeState;
        let type = this.props.type;
        let LiCont = ({data}) =>
            <li>
                {data.title}
                <button
                    onClick={() => this.props.dispatch({
                        type: 'EDIT', obj: {
                            id: data.id,
                            status: data.status === 1 ? 0 : 1
                        }
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

export default List;