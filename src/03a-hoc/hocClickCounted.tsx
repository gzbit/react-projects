import React from 'react';

// options => hocFunction => HocComponent

interface IOptions {
    debug?: boolean,
}

interface IExternalProps {
    style?: React.CSSProperties
}

export interface IInjectedProps {
    clickCount?: number
}

interface IState {
    clickCount: number,
}

export const hocClickCounted = 
    // options
    ({debug = false}: IOptions = {}) =>
    // hocFunction
    <P extends {}>(Component: React.ComponentType<P & IInjectedProps>) => 
    {
        type ResultProps = P & IExternalProps
        // HocComponent
        const result = class HocClickCounted extends React.Component<ResultProps, IState> {
            static displayName = `ClickCounted_HOC(${Component.displayName || Component.name})`

            state = {
                clickCount: 0,
            }

            handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
                if (debug) {
                    console.log('Clicked')
                }
                this.setState( state => ({clickCount: state.clickCount + 1}))
            }

            render () {
                return (
                    <div onClick={this.handleClick} style={this.props.style}>
                        <span>You clicked {this.state.clickCount} times! </span>
                        <Component {...this.props} {...this.state} />
                    </div>
                )
            ;
        }
    }
    // hocFunction
    return result
}

//  P stands for TOriginalProps
//
//  <P extends {}>(Component: React.ComponentType<P & IInjectedProps>)
//
//  is short for:
//
//  <TOriginalProps extends object>Component:  ( 
//      React.ComponentClass<TOriginalProps & IInjectedProps>
//    | React.StatelessComponent<TOriginalProps & IInjectedProps>
//  )