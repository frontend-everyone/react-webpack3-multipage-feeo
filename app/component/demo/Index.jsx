/**
 * Created by Kirk liu on 2018/1/18.
 */
import React from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom'
import Router from './router/Index'
import ReFast from './refast/Index'
import Flux from './flux/Index'
import ReFlux from './ReFlux/Index'
import Redux from './Redux/Index'
import Mobx from './Mobx/Index'
import '../../public/css/demo.pcss'

const Index = () =>
    <HashRouter>
        <div className="content">
            <div className="nav">
                <NavLink to="/Router" activeClassName="selected">router</NavLink>
                <NavLink to="/ReFast" activeClassName="selected">refast</NavLink>
                <NavLink to="/Flux" activeClassName="selected">Flux</NavLink>
                <NavLink to="/ReFlux" activeClassName="selected">ReFlux</NavLink>
                <NavLink to="/Redux" activeClassName="selected">Redux</NavLink>
                <NavLink to="/Mobx" activeClassName="selected">Mobx</NavLink>
            </div>
            <br/>
            <Route path="/Router" component={Router}/>
            <Route path="/ReFast" component={ReFast}/>
            <Route path="/Flux" component={Flux}/>
            <Route path="/ReFlux" component={ReFlux}/>
            <Route path="/Redux" component={Redux}/>
            <Route path="/Mobx" component={Mobx}/>
        </div>
    </HashRouter>
;

export default Index;