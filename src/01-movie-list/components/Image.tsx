import React from 'react'

interface IProps {
    src: string,
    alt: string,
    width: string,
}

const Image = (props: IProps) => {
    const picture = require('../assets/' + props.src)
    
    return <img src={picture} alt={props.alt} width={props.width} />
}

export default Image