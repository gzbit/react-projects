import React from 'react'
import './Header.css'

interface IHeaderProps {
    logo?: string,
    title: string,
}

const Header = (props: IHeaderProps) => (
    <header className="Header">
        <div className="Head">    
            {props.logo 
                ? <img className="Logo" src={props.logo} alt="logo" />
                : null
            }
            <p className="Title">{props.title}</p>
        </div>
    </header>
)

export default Header