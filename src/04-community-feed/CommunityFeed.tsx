import React, { Component } from 'react';
import server from './assets/server.png'
import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header/Header';
import Feed from './Feed/Feed';
import Question from './Question/Question';
import Test from './Test/Test'

// const PATH = '/projects/04'
// replaced by this.props.match.path

type TProps = {
    location: any,
    history: any,
    match: {
        path: string
    }  
}

class CommunityFeed extends Component<TProps, {}> {
    
    componentDidMount() {
        let {history} = this.props
        let {path} = this.props.match

        history.push(path + '/questions')
    }

    render() {
        let {path} = this.props.match

        return (
        <> 
            <Header title="SSR Community Feed" logo={server} />
           
            <Switch>
                <Route path={path + '/questions/:id'} component={Question} />
                <Route path={path + '/questions'} component={Feed} />
                <Route path={path + '/test'}  component={Test} />
            </Switch>
        </>
        );
    }
}

export default CommunityFeed