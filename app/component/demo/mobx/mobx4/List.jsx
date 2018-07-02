import React from 'react';
import {observer} from 'mobx-react';


const List = observer((props) => {
    let LiCont = ({data}) =>
        <li>
            {data.title}
            <button
                onClick={() => props.store.edit({
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
                props.store.list.length > 0 && props.store.list.map(data => [
                        props.type === 0 ?
                            <LiCont data={data} key={data.id}/>
                            :
                            props.type === 1 && data.status === 1 ?
                                <LiCont data={data} key={data.id}/>
                                :
                                props.type === 2 && data.status === 0 ?
                                    <LiCont data={data} key={data.id}/>
                                    :
                                    null
                    ]
                )
            }
        </div>
    )
});
export default List;