import React from 'react'
import {Link} from 'react-router-dom' 

import {IHomeProps} from '../interfaces'
import './Home.css'

const Home = (props: IHomeProps) => {
   
    return (
        
        <div className="Home">
            <h2>Home</h2>
            <ul>
                {props.projects.map((p) => (    
                    <li key={p.nr}>
                        <strong> {p.nr} </strong> 
                        <Link to={`/projects/${p.nr}`}>{p.title} </Link> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

// class Home extends Component {
//     list: IProject
//     constructor(props: IProps) {
//         super(props)
//         console.log(props)
//         this.list = this.props.projects
//     }
//     render () {
//         return (
//             
//         )

//     }
// }

export default Home