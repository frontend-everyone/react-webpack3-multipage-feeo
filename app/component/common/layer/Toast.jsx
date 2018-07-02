/**
 * Created by Kirk liu on 2018/1/15.
 */
import React from 'react';

class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            text: ''
        };
    }

    show(text) {
        this.setState({show: true, text: text}, () => setTimeout(() => this.setState({show: false}), 2000))
    }

    render() {
        let {show, text} = this.state;
        return [
            show ?
                <div className="layer toast" key="toast">{text}</div>
                :
                null
        ];
    }
}

export default Toast;