import React from 'react'

import Header from '../common/Header/Header'
import logo from './assets/pm-icon.png'
import {TicketBoard} from './Board/Board'


// HOC Caller

import jsonFile from './assets/data.json'

interface ILane {
    laneId: number,
    title: string,
}

export interface IExternalProps {
    lanes?: ILane[],
    dataSource: any,
}

const ProjectManager = () => {

    const lanes = [
        { laneId: 1, title: 'To Do' },
        { laneId: 2, title: 'In Progress' },
        { laneId: 3, title: 'Review' },
        { laneId: 4, title: 'Done' },
    ]

    return (
        <>
            <Header logo={logo} title="Project Management Board" />
            <TicketBoard lanes={lanes} dataSource={jsonFile} /> 
            <TicketBoard dataSource={jsonFile} />
        </>    
    )

}

export default ProjectManager