import React from 'react';

const Main = (props) =>
    <div className="todoList">
        {props.state || 0}<button onClick={props.add.bind(this,1)}>+</button>
    </div>
;

export default Main;