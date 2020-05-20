import React from 'react'

import { IExternalProps } from '../ProjectManager'
import {ITicket} from '../Board/Tickets/Ticket/Ticket'

interface IOptions {
    //json?: string,
}


export interface IInjectedProps {
    tickets: ITicket[],
    loading: boolean,
    error: string,
}

interface IState {
    tickets: ITicket[],
    loading: boolean,
    error: string,
}

export const withJsonDataFetching = 

    // options
    //({json = ''}: IOptions = {}) =>

    // hocFunction
    <P extends {}>(Component: React.ComponentType<P & IInjectedProps>) => 
    
    {
        type ResultProps = P & IExternalProps
    
        // HocComponent
        const result = class WithJsonDataFetching extends React.Component<ResultProps, IState> {

            static displayName = `HocWithJsonDataFetching(${Component.displayName || Component.name})`
    
            state: IState = {
                tickets: [],
                loading: true,
                error: '',
            }
    
        async loadData() {
            return JSON.parse(JSON.stringify(this.props.dataSource))
            // returns a promise, because of async?
        }

        componentDidMount() {
            this.loadData()
                .then(data => this.setState({ tickets: data, loading: false, }))
                .catch(error => this.setState({ loading: false, error: error.message }))
            ;     
        }

        render() {
            return (
                <Component {...this.props} {...this.state} />    
            )
        }
        
    }
   
    // hocFunction
    return result
}
