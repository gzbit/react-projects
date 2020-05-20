import React from 'react';
import './Board.css'

import Lane from './Lanes/Lane/Lane';
import  Ticket, { ITicket } from './Tickets/Ticket/Ticket'
import { withJsonDataFetching, IInjectedProps }  from '../hoc/withJsonDataFetching'
import { IExternalProps } from '../ProjectManager'

// Original Component to be wrapped

interface IState{
    tickets: ITicket[],
}

type dragEvent = React.DragEvent<HTMLDivElement>

interface IInternalProps {
    marginRight?: boolean,
    laneId?: number
    onDragStart: (e: dragEvent, tcketId: number) => void,
    onDragOver: (e: dragEvent) => void
    onDrop: (e: dragEvent, laneId:number) => void
}

export type IBoardProps = IExternalProps & IInjectedProps & IInternalProps

class Board extends React.Component<IExternalProps & IInjectedProps, IState> {

    state: IState = {
        tickets: [],
    }

    componentDidUpdate(prevProps: IBoardProps) {
        if (prevProps.tickets !== this.props.tickets) {
            this.setState({ tickets: this.props.tickets })
        }
    }

    onDragStart = (e: dragEvent, ticketId: number) => {   
        e.dataTransfer.setData('id', ticketId.toString())
    }

    onDragOver = (e: dragEvent) => {
        e.preventDefault()    
    }

    onDrop = (e: dragEvent, laneId: number) => {
        const id = e.dataTransfer.getData('id')
        const tickets = this.state.tickets.filter(ticket => {
            if (ticket.id.toString() === id) {
                ticket.lane = laneId
            }
            return ticket
        })
        this.setState({tickets})
    }

    render () {
        const {lanes, loading, error} = this.props
        return (
            <div className="Board">
                {lanes
                    ? lanes!.map(lane => 
                        <Lane 
                            key={lane.laneId}
                            laneId={lane.laneId}
                            title={lane.title}
                            loading={loading}
                            error={error}
                            onDragStart={this.onDragStart}
                            onDragOver={this.onDragOver}
                            onDrop={this.onDrop}
                            tickets={this.state.tickets.filter(ticket => ticket.lane === lane.laneId)}  
                        />
                    )
                    : this.state.tickets.map(
                        ticket => <Ticket 
                                    key={ticket.id} 
                                    ticket={ticket} 
                                    onDragStart={this.onDragStart} 
                                    onDragOver={this.onDragOver}
                                    marginRight/>
                    )
                }
            </div>
        ) 
    }
}

export const TicketBoard = withJsonDataFetching(Board)

