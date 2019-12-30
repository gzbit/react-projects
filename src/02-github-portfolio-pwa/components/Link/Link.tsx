import React from 'react'
import css from './Link.module.css'

interface IProps {
    url?: string,
    title: string;
}

const Link = (props: IProps) => (
    <a  className={css.Link}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {props.title}
    </a>

)

export default Link