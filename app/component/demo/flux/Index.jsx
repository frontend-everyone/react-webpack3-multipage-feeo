import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Flux1 from './flux1/Index'
import Flux2 from './flux2/Index'
import Flux3 from './flux3/Index'
import Flux4 from './flux4/Index'
import Flux5 from './flux5/Index'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Flux/Flux1" activeClassName="selected">Flux1</NavLink>
                <NavLink to="/Flux/Flux2" activeClassName="selected">Flux2</NavLink>
                <NavLink to="/Flux/Flux3" activeClassName="selected">Flux3</NavLink>
                <NavLink to="/Flux/Flux4" activeClassName="selected">Flux4</NavLink>
                <NavLink to="/Flux/Flux5" activeClassName="selected">Flux5</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/Flux1`}/>)}/>
            <Route path={`${match.url}/Flux1`} component={Flux1}/>
            <Route path={`${match.url}/Flux2`} component={Flux2}/>
            <Route path={`${match.url}/Flux3`} component={Flux3}/>
            <Route path={`${match.url}/Flux4`} component={Flux4}/>
            <Route path={`${match.url}/Flux5`} component={Flux5}/>
        </div>
    </HashRouter>
;

export default Index;