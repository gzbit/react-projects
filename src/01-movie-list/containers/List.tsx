import React, { Component } from 'react'
import Card from '../components/Card'
import Header from '../../common/Header/Header'
import Json from '../assets/data.json' 
import './List.css'

export interface IMovie {
    id: number,
    title: string,
    distributor: string,
    year: number,
    amount: string,
    img: {
      src: string,
      alt: string,
    },
    ranking: number,
}

interface IState {
    data: IMovie[],
    loading: boolean,
}

export class List extends Component {

    state: IState = {
        data: [] ,
        loading: true,
    }

    async loadData() {
        return JSON.parse(JSON.stringify(Json))
        // returns a promise, because of async?
    }

    componentDidMount() {
        this.loadData().then(movies => {
            this.setState({
                data: movies,
                loading: false,
            })
        })   
    }

    render() {
        const {data, loading} = this.state

        if (loading) {
            return <p>Loading</p>
        } 


        const cards = data.map(movie => (
            <Card movie={movie} key={movie.id} />
        ))
        
        return (
            <div>
                <Header title="Movie List" logo='' />
                <div className="List">
                    {cards}
                </div>
                
            </div>
        )
    }
}

export default List