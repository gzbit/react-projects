import React from 'react'
import './Header.css'

interface IHeaderProps {
    logo: string,
    title: string,
}

const Header = (props: IHeaderProps) => (
    <header className="Header">
        <div className="Head">        
            <img className="Logo" src={props.logo} alt="logo" />
            <p className="Title">{props.title}</p>
        </div>
    </header>
)

export default Header