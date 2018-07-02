import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import ReFlux1 from './reflux1/Index'
import ReFlux2 from './reflux2/Index'
import ReFlux3 from './reflux3/Index'
import ReFlux4 from './reflux4/Index'
import ReFlux5 from './reflux5/Index'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/ReFlux/ReFlux1" activeClassName="selected">ReFlux1</NavLink>
                <NavLink to="/ReFlux/ReFlux2" activeClassName="selected">ReFlux2</NavLink>
                <NavLink to="/ReFlux/ReFlux3" activeClassName="selected">ReFlux3</NavLink>
                <NavLink to="/ReFlux/ReFlux4" activeClassName="selected">ReFlux4</NavLink>
                <NavLink to="/ReFlux/ReFlux5" activeClassName="selected">ReFlux5</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/ReFlux1`}/>)}/>
            <Route path={`${match.url}/ReFlux1`} component={ReFlux1}/>
            <Route path={`${match.url}/ReFlux2`} component={ReFlux2}/>
            <Route path={`${match.url}/ReFlux3`} component={ReFlux3}/>
            <Route path={`${match.url}/ReFlux4`} component={ReFlux4}/>
            <Route path={`${match.url}/ReFlux5`} component={ReFlux5}/>
        </div>
    </HashRouter>
;

export default Index;