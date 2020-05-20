import React from 'react'
import './PaginationLinkStyles.css'

const PaginationLink = (props: any) => 
    <a className="PaginationLink">
        {props.children}
    </a>


export default PaginationLink