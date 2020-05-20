import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
//import Helmet from 'react-helmet';
import Card, {TCard} from '../Card/Card'
import './FeedStyles.css'
//import PaginationBar from './PaginationBar/PaginationBar'
import styled from 'styled-components'



const ROOT_API = 'https://api.stackexchange.com/2.2/';

type TState = {
  data?: {
    items: TCard[],
    has_more: boolean,
    quota_max: number,
    quota_remaining: number,
  },
  loading: boolean,
  page: number,
  error: string,
}

type TProps = any

class Feed extends Component<TProps, TState> {

  constructor(props: any) {
    super(props)
    const page = this.getPage()
    this.state  = {
      data: undefined,
      page,
      loading: true,
      error: '',
    }  
  }
  
  async componentDidMount() {
    const {page} = this.state
    //console.log('props: ', this.props)
    this.fetchAPI(page)
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.location.search !== this.props.location.search) {
      const page = this.getPage()
      this.setState(
        { page },
        () => this.fetchAPI(this.state.page)
      )
    }
  }

  render() {
    const { data, page, loading, error } = this.state
    const { match } = this.props
    //console.log('state: ' , this.state)
    //console.log('props: ' , this.props)

    //console.log(path)
    if (loading || error) {
      return <div className="Alert">{loading ? 'Loading...' : error}</div>;
    }

    const previousPageExitsts = page > 1
    const nextPageExists = data!.has_more

    return (
      <div className="Feed">
        {data!.items.map(item => (
          <Link 
            key={item.question_id} 
            to={`${match.path}/${item.question_id}`}
          >
            <Card 
              key={item.question_id} 
              data={item} 
            />
          </Link>
          
        ))}
        <PaginationBar>
          {/* <PaginationLink to="#">Prvious</PaginationLink>
          <PaginationLink to="#">Next</PaginationLink>  */}
          { 
            previousPageExitsts &&  
            <PaginationLink to={`${match.url}?page=${page-1}`}>Previous</PaginationLink>
          }
          { 
            !previousPageExitsts &&  
            <PaginationNonLink to="#">Previous</PaginationNonLink>
          }
          { nextPageExists && 
            <PaginationLink to={`${match.url}?page=${page+1}`}>Next</PaginationLink>
          } 
          { !nextPageExists && 
            <PaginationNonLink to="#">Next</PaginationNonLink>
          } 

        </PaginationBar>
      </div>
    );
  }

  getPage(): number {
    const query = queryString.parse(this.props.location.search)  
    if (query.page) {
      return parseInt(query.page.toString())
    }
    return 1
  }

  async fetchAPI (page: number) {
    try {
      const data = await fetch(
        `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow${page ? `&page=${page}` : ''}`
      )
      const dataJSON = await data.json();

      if (dataJSON) {
        this.setState({
          data: dataJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }
}

const PaginationBar = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between; 
  margin-left: 10px;
  margin-top: 20px;
  background: beige;
`

const PaginationLink = styled(Link)`
  padding: 1%;
  background: lightblue;
  color: inherit;
  text-decoration: none;
  border-radius: 5px;
`

const PaginationNonLink = styled(Link)`
  padding: 1%;
  background: lightgray;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: not-allowed;
`

export default Feed;