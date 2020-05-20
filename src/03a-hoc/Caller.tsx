import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header/Header'
import {Demo, DemoWithDebug, OriginalComponent} from './OriginalComponent'


const DemoWrap = styled.div`
    border: 1px solid green;
    padding: 30px;
    width: 30%;
    height 30%;
    margin: 60px auto;
`

const Caller = () => (
    <>
        <Header title="Higher Order Components (HOC) with TypeScript" />
        <DemoWrap><Demo text="HOC Demo" style={{background: 'gray'}} /></DemoWrap>
        <DemoWrap><DemoWithDebug  text="HOC DemoWithDebug"/></DemoWrap>
        <DemoWrap><OriginalComponent text="OriginalComponent" /></DemoWrap>
    </>
)

export default Caller