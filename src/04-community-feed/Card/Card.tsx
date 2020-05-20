import React from 'react'
import Owner, {TOwner} from './Owner/Owner'
import './CardStyles.css'

export type TCard = {
    tags: string[],
    owner: TOwner,
    is_answered: boolean,
    view_count: number,
    answer_count: number,
    score: number,
    last_activity_date: Date,
    creation_date: Date,
    question_id: number,
    link: string,
    title: string,
}

interface IProps {
    data: TCard,
}

const Card = (props: IProps) => {
    
    const {data} = props
  
    return (
        <div className="Card">
            <div className="Title">{data.title}</div>
            <div className="Meta">
            <div className="Count">
                {`Views: ${data.view_count} | Answers: ${data.answer_count}`}
            </div>
                <Owner data={data.owner} />
            </div>
            <p>{data.question_id}</p>
        </div>
    )
}

export default Card
