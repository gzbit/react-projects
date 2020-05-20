import React, {Component} from 'react'
import logo from '../assets/home.png'
import Header from '../../common/Header/Header'
import Profile from './Profile';

class Pwa extends Component {
    render () {
        return (
            <>
                <Header logo={logo} title="Github Portfolio (PWA)" />
                <Profile />
            </>
        )
    }
} 

export default Pwa