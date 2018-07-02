import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Redux1 from './redux1/Index'
import Redux2 from './redux2/Index'
import Redux3 from './redux3/Index'
import Redux4 from './redux4/Index'
import Redux5 from './redux5/Index'
import Redux6 from './redux6/Index'

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Redux/Redux1" activeClassName="selected">Redux1</NavLink>
                <NavLink to="/Redux/Redux2" activeClassName="selected">Redux2</NavLink>
                <NavLink to="/Redux/Redux3" activeClassName="selected">Redux3</NavLink>
                <NavLink to="/Redux/Redux4" activeClassName="selected">Redux4</NavLink>
                <NavLink to="/Redux/Redux5" activeClassName="selected">Redux5</NavLink>
                <NavLink to="/Redux/Redux6" activeClassName="selected">Redux6</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/Redux1`}/>)}/>
            <Route path={`${match.url}/Redux1`} component={Redux1}/>
            <Route path={`${match.url}/Redux2`} component={Redux2}/>
            <Route path={`${match.url}/Redux3`} component={Redux3}/>
            <Route path={`${match.url}/Redux4`} component={Redux4}/>
            <Route path={`${match.url}/Redux5`} component={Redux5}/>
            <Route path={`${match.url}/Redux6`} component={Redux6}/>
        </div>
    </HashRouter>
;

export default Index;