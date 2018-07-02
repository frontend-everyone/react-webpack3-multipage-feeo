/**
 * Created by Kirk liu on 2018/2/25.
 */
import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Dome3 from './demo3/Index'
import Dome4 from './demo4/Index'
import Dome5 from './demo5/Index'
import Dome6 from './demo6/Index'
import Dome7 from './demo7/Index'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/ReFast/Dome3" activeClassName="selected">demo3</NavLink>
                <NavLink to="/ReFast/Dome4" activeClassName="selected">demo4</NavLink>
                <NavLink to="/ReFast/Dome5" activeClassName="selected">demo5</NavLink>
                <NavLink to="/ReFast/Dome6" activeClassName="selected">demo6</NavLink>
                <NavLink to="/ReFast/Dome7" activeClassName="selected">demo7</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/Dome3`}/>)}/>
            <Route path={`${match.url}/Dome3`} component={Dome3}/>
            <Route path={`${match.url}/Dome4`} component={Dome4}/>
            <Route path={`${match.url}/Dome5`} component={Dome5}/>
            <Route path={`${match.url}/Dome6`} component={Dome6}/>
            <Route path={`${match.url}/Dome7`} component={Dome7}/>
        </div>
    </HashRouter>
;

export default Index;