import {Component} from 'react'

export interface IProject {
    nr: string,
    title: string,
    component: string,
}

export interface IHomeProps {
    projects: IProject[]
}