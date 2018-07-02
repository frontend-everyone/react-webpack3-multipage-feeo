import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Mobx1 from './mobx1/Index'
import Mobx2 from './mobx2/Index'
import Mobx3 from './mobx3/Index'
import Mobx4 from './mobx4/Index'
import Mobx5 from './mobx5/Index'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Mobx/Mobx1" activeClassName="selected">Mobx1</NavLink>
                <NavLink to="/Mobx/Mobx2" activeClassName="selected">Mobx2</NavLink>
                <NavLink to="/Mobx/Mobx3" activeClassName="selected">Mobx3</NavLink>
                <NavLink to="/Mobx/Mobx4" activeClassName="selected">Mobx4</NavLink>
                <NavLink to="/Mobx/Mobx5" activeClassName="selected">Mobx5</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/Mobx1`}/>)}/>
            <Route path={`${match.url}/Mobx1`} component={Mobx1}/>
            <Route path={`${match.url}/Mobx2`} component={Mobx2}/>
            <Route path={`${match.url}/Mobx3`} component={Mobx3}/>
            <Route path={`${match.url}/Mobx4`} component={Mobx4}/>
            <Route path={`${match.url}/Mobx5`} component={Mobx5}/>
        </div>
    </HashRouter>
;

export default Index;