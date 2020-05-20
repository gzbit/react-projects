import React from 'react'
import './PaginationBarStyles.css'
import PaginationLink from './PaginationLink/PaginationLink'

const PaginationBar = (props: any) => 
    <div className="PaginationBar">
        <PaginationLink>Previous</PaginationLink>
        <PaginationLink>Next</PaginationLink>
    </div>


export default PaginationBar