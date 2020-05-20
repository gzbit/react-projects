import React, {Component} from 'react'
import './Tickets.css'

import Ticket from './Ticket/Ticket'

// OriginalComponent

import { IBoardProps } from '../Board'

const Tickets = ({tickets, loading, error, marginRight, onDragStart, onDragOver}: IBoardProps) => (
    <div className="Tickets">
        {(loading || error) && <div className="Alert">{loading ? 'Loading...' : error}</div> }
        {tickets.map(ticket => <Ticket 
                                    key={ticket.id} 
                                    ticket={ticket} 
                                    marginRight={marginRight} 
                                    onDragStart={onDragStart}
                                    onDragOver={onDragOver}
                                />)}
    </div>
)

export default Tickets

//export const LoadedTickets = withJsonDataFetching(Tickets)


