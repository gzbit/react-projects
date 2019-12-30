import React, { Component,  } from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import Home from './00-home/Home'
import List from './01-movie-list/containers/List'
import Pwa from './02-github-portfolio-pwa/containers/Pwa'
import {IProject} from './interfaces'
import './Cockpit.css'

interface IState {
    projects: IProject[]
}

class Cockpit extends Component {
    
    state: IState = {
        projects: [
            {nr: '01', title: 'Movie List', component: 'List'},
            {nr: '02', title: 'Github Portfolio (PWA)', component: 'Pwa'}
        ]
    }

    render() { return (
        <BrowserRouter>
            <header className="Cockpit">
                <h1>React Projects</h1>
                <nav><ul>
                    <li key="00"><NavLink to="/projects/00">Home</NavLink></li>    
                    {this.state.projects.map((p) =>
                        <li key={p.nr}><NavLink to={`/projects/${p.nr}`}>{p.nr}</NavLink></li> 
                    )}  

                </ul></nav>
            </header>
            
            <Switch>
                <Route path="/projects/00" render={() => 
                    <Home projects={this.state.projects} />
                } /> 
                <Route path="/projects/01" component={List} />
                <Route path="/projects/02" component={Pwa} />
                //..
                <Route render={() => 
                    <Home projects={this.state.projects} /> 
                } />
            </Switch>
        </BrowserRouter>
    )}
}

export default Cockpit