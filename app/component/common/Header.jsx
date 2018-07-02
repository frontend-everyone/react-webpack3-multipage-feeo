/**
 * Created by Kirk liu on 2018/1/18.
 */
import React from 'react';
import '../../public/css/common.pcss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pathname = window.location.pathname
    }

    handleNavClassName(name,index) {
        if (this.pathname.indexOf(name + '.html') !== -1) {
            return "selected"
        } else {
            return null
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="header">
                <i className="ico-header-logo"/>
                <div className="nav">
                    <a href="/index.html" className={this.handleNavClassName('index',1)}>首页</a>
                    <a href="/shop.html" className={this.handleNavClassName('shop')}>商城</a>
                    <a href="/demo.html" className={this.handleNavClassName('demo')}>demo演示</a>
                </div>
            </div>
        );
    }
}

export default Header;