import React from 'react'
import {hocClickCounted, IInjectedProps} from './hocClickCounted'

interface IOriginalProps {
    text: string,
}

export const OriginalComponent = (props: IOriginalProps & IInjectedProps): JSX.Element => (
    <>
        <p>{props.text}</p>
        {typeof props.clickCount === 'undefined'
            ? <p>Component call without <strong>hocClickCounted</strong></p>
            : <p>{props.clickCount! > 4 ? 'Easy there!' : 'Bring it!'}</p>
        }
        
    </>
)
export const Demo = hocClickCounted()(OriginalComponent)
export const DemoWithDebug = hocClickCounted({ debug: true})(OriginalComponent)
