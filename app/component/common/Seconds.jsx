import React from 'react';
import SecondsTop from './SecondsTop'
import SecondsBottom from './SecondsBottom'

class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);

    }

    render() {
        let state = this.state;
        return (
            <div className="cont">
                <SecondsTop {...this.props} />
                <SecondsBottom {...state}/>
            </div>
        );
    }
}

export default Seconds;