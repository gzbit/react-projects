import React from 'react'
import { IMovie } from '../containers/List'
import './Card.css'
import Image from './Image'

interface IProps {
    movie: IMovie,
    key: number,
}

const Card = (props: IProps) => {
    const movie = props.movie
    return (
        <div className="Card">
            <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
            <Image src={movie.img.src} alt={movie.img.alt} width="200" />
            <p>{`Distributor: ${movie.distributor}`}</p>
            <p>{`Amount: ${movie.amount}`}</p>
        </div>
        
    )
}

export default Card