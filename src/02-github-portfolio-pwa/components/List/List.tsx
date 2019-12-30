import React from 'react'

export interface IItem {
    label: string,
    value: any,
}

interface IProps {
    items: IItem[],
    title: string,
}

const List = (props: IProps) => (
    <>
        <h2>{props.title}</h2>
        <hr />
        <ul>
            {props.items.map(item => (
                <li key={item.label}><strong>{item.label}</strong>{item.value}</li>
            ))}
        </ul>
    </>
)

export default List