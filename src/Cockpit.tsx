import React, { Component,  } from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import Home from './00-home/Home'
import List from './01-movie-list/containers/List'
import Pwa from './02-github-portfolio-pwa/containers/Pwa'
import ProjectManager from './03-project-management-board/ProjectManager'
import Caller from './03a-hoc/Caller'
import FileUploader from './03b-file-uploader/FileUploader'
import Flexbox from './03c-flexbox/first excercise/Flexbox'
import Nav from './03c-flexbox/Nav'
import CommunityFeed from './04-community-feed/CommunityFeed'
import {IProject} from './interfaces'
import './Cockpit.css'


interface IState {
    projects: IProject[]
}

// todo: generate all routes by mapping array projects

class Cockpit extends Component {
    
    state: IState = {
        projects: [
            {nr: '01', title: 'Movie List', component: 'List'},
            {nr: '02', title: 'Github Portfolio (PWA)', component: 'Pwa'},
            {nr: '03', title: 'Project Management Board', component: 'ProjectManager' },
            {nr: '03a',title: 'Higher Order Components (HOC) in TypeScript', component: 'Caller' },
            {nr: '03b', title: 'File Uploader (Drag & Drop)', component: 'FileUploader'},
            {nr: '03c', title: 'Flexbox Tutorial', component : 'Nav'},
            {nr: '04', title: 'Community Feed (SSR - server side rendering)', component: 'CommunityFeed' },

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
                <Route path="/projects/03" component={ProjectManager} />
                <Route path="/projects/03a" component={Caller} />
                <Route path="/projects/03b" component={FileUploader} />
                <Route path="/projects/03c" component={Nav} />
                <Route path="/projects/04" component={CommunityFeed} />
                //..
                <Route render={() => 
                    <Home projects={this.state.projects} /> 
                } />
            </Switch>
        </BrowserRouter>
    )}
}

export default Cockpit