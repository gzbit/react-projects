import React from 'react';
import './Ticket.css'

export interface ITicket {
    id: number,
    title: string,
    body: string,
    lane: number,
}

export interface ITicketProps {
    ticket: ITicket,
    marginRight?: boolean,
    onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
}

const Ticket = (props: ITicketProps) => {
    const {ticket, onDragStart, onDragOver, marginRight} = props
    // console.log('marginRight: ', !!props.marginRight) <<< works
    const cn = !!marginRight ? "Ticket Margin" : "Ticket"
    return (  
        <div className={cn}>
            <div className="inner"
                draggable
                onDragStart={(e) => onDragStart(e, ticket.id)}
                onDragOver={onDragOver}
            >   
                <div className="Title">{ticket.title}</div>
                <div className="Body">{ticket.body}</div>
            </div>
        </div>
    )
}

export default Ticket