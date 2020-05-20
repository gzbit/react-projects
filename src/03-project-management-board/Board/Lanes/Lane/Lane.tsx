import React from 'react';
import './Lane.css'
import Ticket, {ITicket} from '../../Tickets/Ticket/Ticket'

type dragEvent = React.DragEvent<HTMLDivElement>

interface IProps {
    title: string,
    loading: boolean,
    error: string,
    tickets: ITicket[],
    laneId: number,
    onDragStart: (e: dragEvent, ticketId: number) => void
    onDragOver: (e: dragEvent) => void
    onDrop: (e: dragEvent, laneId: number) => void
}

const Lane = ({title, loading, error, tickets, onDragStart, onDragOver, onDrop, laneId}: IProps) => {
   
    return (
        <div className="Lane" onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <div className="Title">{title}</div>
            {(loading || error) && <div className="Alert">{loading ? 'Loading...' : error}</div>}      
            {tickets.map((ticket: ITicket) => (
                <div  className="Ticket" key={ticket.id} >
                  <Ticket
                    ticket={ticket} 
                    onDragStart={onDragStart.bind(ticket.id)}
                    onDragOver={onDragOver}
                    
                    />
                </div>
             ))}

        </div>
)};

export default Lane
