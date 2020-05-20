import React, {Component} from 'react';
import axios from '../axiosGithubUsers'
import './Profile.css'

import List from '../components/List/List'
import {IItem} from '../components/List/List'
import Link from '../components/Link/Link'

interface IProfileData {
    login?: string,
    id?: number,
    node_id?: string,
    avatar_url?: string,
    gravatar_id?: string,
    url?: string,
    html_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    starred_url?: string,
    subscriptions_url?: string,
    organizations_url?: string,
    repos_url?: string,
    events_url?: string,
    received_events_url?: string,
    type?: string,
    site_admin?: boolean,
    name?: string,
    company?: string,
    blog?: string,
    location?: string,
    email?: string,
    hireable?: boolean,
    bio?: string,
    public_repos?: number,
    public_gists?: number,
    followers?: number,
    following?: number,
    created_at?: string,
    updated_at?: string,
}

interface IState {
    data: IProfileData,
    repositories: IItem[],
    loading: boolean,
    error: string,
}

class Profile extends Component {
    
    state: IState = {
        data: {},
        repositories: [],
        loading: true,
        error: '',
    }

    componentDidMount() {
        axios
            .get('gzbit')
            .then(response => {
                const data = response.data
                axios
                    .get('gzbit/repos')
                    .then((r: any) => {
                        const repositories = r.data.map((repository: any) => ({
                            label: repository.name,
                            value: <Link url={repository.html_url} title="GitHub" />
                        }))
                        const loading = false
                        this.setState({data, repositories, loading})
                    })
                    .catch(e => this.setState({
                        error: `Repository Load Error: \n ${e.message}`,
                        loading: false,
                    }))
            })
            
            .catch(error => this.setState({
                error: `Profile Load Error: \n ${error.message}`,
                loading: false
            }))
    }

    render() {
        const {data, repositories, loading, error} = this.state
        if (loading || error) {
            return <p>{loading ? 'Loading...' : error}</p>
        }
        const items: IItem[] = [
            {label: 'html_url', value: <Link url={data.html_url} title='GitHub URL' />},
            {label: 'repos_url', value: <Link url={data.repos_url} title='Repos URL' />},
            {label: 'name', value: data.name},
            {label: 'company', value: data.company},
            {label: 'location', value: data.location},
            {label: 'email', value: data.email},
            {label: 'bio', value: data.bio},
        ]
        return (
            <div className="Profile">
                <img src={data.avatar_url} alt="Avatar"/>
                <List title="Profile" items={items} />
                <List title="Projects" items={repositories} />
            </div>
        )
    }

}

export default Profile