/**
 * Created by Kirk liu on 2018/2/25.
 */
import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import {BundleFun} from '../../common/Bundle'
import Dome1 from './demo1/Demo1.bundle'
import Dome2 from './demo2/Demo2.bundle'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Router/Dome1" activeClassName="selected">demo1</NavLink>
                <NavLink to="/Router/Dome2" activeClassName="selected">demo2</NavLink>
            </div>
            <Route exact path="/"
                   render={() => (<Redirect to="/Dome1"/>)}/>
            <Route path={`${match.url}/Dome1`} component={() => BundleFun(Dome1)}/>
            <Route path={`${match.url}/Dome2`} component={(props) => BundleFun(Dome2, props)}/>
        </div>
    </HashRouter>
;
export default Index;