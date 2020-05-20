import React from 'react'
import Helmet from 'react-helmet'
import Card from '../Card/Card'
import './QuestionStyle.css'


const ROOT_API = 'https://api.stackexchange.com/2.2/';

interface IState {
    data?: {
        items: any[],
    },
    loading: boolean,
    error: string,
}

type TProps = any

class Question extends React.Component<TProps, IState> {
    state: IState = {
        data: undefined,
        loading: true,
        error: '',
    }

    constructor(props: any) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack = () => this.props.history.goBack()

    async componentDidMount() {
        const { match } = this.props;
        try {
        const data = await fetch(
            `${ROOT_API}questions/${match.params.id}?site=stackoverflow`,
        );
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

    render() {
        const { match } = this.props;
        const { data, loading, error } = this.state;

        if (loading || error) {
            return (
                <>
                <Helmet>
                    <title>{`Q&A Feed - Question #${match.params.id}`}</title>
                </Helmet>
                <div className="Alert">{loading ? 'Loading...' : error}</div>
                </>
            );
        }

        return (
            <div className="Question">
                <Card 
                    key={data!.items[0].question_id} 
                    data={data!.items[0]} 
                />
                 <button onClick={this.goBack}>Back</button>
            </div>
           
        );
    }
    }

export default Question;