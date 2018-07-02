import React from 'react';

const LiCont = ({data, dispatch}) =>
    <li>
        {data.title}
        <button
            onClick={() => dispatch('handleItemEdit', {
                id: data.id,
                status: data.status === 1 ? 0 : 1
            })}
            className={data.status === 1 ? "del" : "recovery"}>
            {data.status === 1 ? "删除" : "恢复"}
        </button>
    </li>
;

const List = ({dispatch, list, type}) =>
    <div className="list">
        {
            list.map(data => [
                    type === 0 ?
                        <LiCont data={data} dispatch={dispatch} key={data.id}/>
                        :
                        type === 1 && data.status === 1 ?
                            <LiCont data={data} dispatch={dispatch} key={data.id}/>
                            :
                            type === 2 && data.status === 0 ?
                                <LiCont data={data} dispatch={dispatch} key={data.id}/>
                                :
                                null
                ]
            )
        }
    </div>
;
export default List;