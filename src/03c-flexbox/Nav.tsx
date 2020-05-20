import React from 'react'
import './NavStyles.scss'
import { isUndefined } from 'util'
//import abstract from 'https://loremflickr.com/1000/600/abstract' 
//import 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'

interface IProps {}

interface IState {
    width: number
    smallMenu: boolean,
    largeMenu: boolean,
} 

class Nav extends React.Component<IProps, IState>  {

    WIDTH = 500

    constructor(props: IProps) {
        super(props)
        this.state = {
            width: window.innerWidth,
            smallMenu: false,
            largeMenu: false,
        } 
        this.handleSmallMenuClick = this.handleSmallMenuClick.bind(this)
        this.handleLargeMenuClick = this.handleLargeMenuClick.bind(this)
    }

    componentDidMount() {
        this.setMenu()
    }

    componentShouldUpdate(nextState: IState) {
        if (
            (window.innerWidth > this.WIDTH && prevState.width <= this.WIDTH) 
            ||
            (window.innerWidth <= this.WIDTH && prevState.width > this.WIDTH)
        ){
            this.setMenu()
            return true
        }

        return false
            
            
    }

    setMenu() {
        const width = window.innerWidth
        if (width > this.WIDTH) {
            const smallMenu = false
            const largeMenu = true
            this.setState({ width, smallMenu, largeMenu })
        } else {
            const smallMenu = true
            const largeMenu = false
            this.setState({ width, smallMenu, largeMenu })
        }  
    }

    handleSmallMenuClick() {
        const smallMenu = false
        const largeMenu = true
        this.setState({ smallMenu, largeMenu })
    }

    handleLargeMenuClick() {
        if (window.innerWidth <= this.WIDTH) {
            const smallMenu = true
            const largeMenu = false
            this.setState({ smallMenu, largeMenu })
        }    
    }

    render() { 
      return (
        <div className="Nav wrapper">

            <header className="top">
                <h1>What the Flexbox?!</h1>
            </header>
            
            <nav className="flex-nav">
                <a  
                    className={this.state.smallMenu ? "open" : "closed"} 
                    onClick={this.handleSmallMenuClick}
                >
                    Menu
                </a>
                <div
                    className={this.state.largeMenu ? "open" : "closed"}
                    onClick={this.handleLargeMenuClick}
                >
                    <ul >
                        <li><a href="#">Item 01</a></li>
                        <li><a href="#">Item 02</a></li>
                        <li><a href="#">Item 03</a></li>
                        <li><a href="#">Item 04</a></li>
                        <li><a href="#">Item 05</a></li>
                        <li><a href="#">Item 06</a></li>
                        <li className="social">
                                <a href="http://twitter.com/wesbos">
                                    T<i className="fa fa-twitter" />
                                </a>
                        </li>
                        <li className="social">
                            <a href="http://facebook.com/wesbos.developer">
                                F<i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li className="social">
                            <a href="http://github.com/wesbos">
                                G<i className="fa fa-github" />
                            </a>
                        </li>
                        <li className="social">
                            <a href="http://instagram.com/wesbos">
                                I<i className="fa fa-instagramm" />
                            </a>
                        </li>
                    </ul>
               </div>
            </nav>

            <section className="hero">
                <img src="https://loremflickr.com/1000/600/abstract" />
            </section>

            <section className="details">
                <p>A simple vdeo cours to help you master the FlexBox.</p>  
                <a href="https://courses.wesbos.com/account/access/5e7ce9be6ccee4763b8ce357">
                    Link
                </a>
            </section>

            <section className="signup">
                <form action="" className="signup">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="submit" value="Sign me up!" />
                </form>
            </section>

            <footer>
                <p>&copy; Wes Bos</p>
            </footer>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
               
            </script>

        </div>
    )}
}

export default Nav