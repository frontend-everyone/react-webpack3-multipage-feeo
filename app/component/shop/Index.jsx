import React from 'react';
import utils from '../../public/js/utils';
import apiRequest from '../../public/js/apiRequest';
import '../../public/css/shop.pcss'


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: '前端人人1'},
                {id: 2, title: '前端人人2'},
                {id: 3, title: '前端人人3'},
                {id: 4, title: '前端人人4'},
                {id: 5, title: '前端人人5'},
                {id: 6, title: '前端人人6'},
                {id: 7, title: '前端人人7'},
                {id: 8, title: '前端人人8'},
                {id: 9, title: '前端人人9'}
            ]
        };
    }

    handleItemDel(id) {
        let list = this.state.list;
        list.splice(list.findIndex(data => data.id === id), 1);
        this.setState({list: list})
    }

    componentDidMount() {
        apiRequest.post('todoList', {
            start: 0,
            end: 20
        }, data => console.log(data), data => console.log(data.code))
    }

    render() {
        let {list} = this.state;
        return (
            <div className="content">
                <div>获取url中参数name的值：{utils.urlParam('name')}</div>
                <div>15910678888：这{utils.isMobile('15910678888') ? '是' : '不是'}手机号</div>
                <div>11111111111：这{utils.isMobile('11111111111') ? '是' : '不是'}手机号</div>
                {
                    list.map(data => <li key={data.id}>{data.title}
                        <button onClick={() => this.handleItemDel(data.id)}>删除</button>
                    </li>)
                }
            </div>
        );
    }
}

export default Index;