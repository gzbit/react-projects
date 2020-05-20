import React from 'react';
import './OwnerStyles.css'

export type TOwner = {
    reputation: number,
    user_id: number,
    user_type: string,
    profile_image: string,
    display_name: string,
    link: string,
}

interface IProps {
    data: TOwner
}

const Owner = (props: IProps) => {
    const data = props.data
    return (
        <div className="Owner">
            <img className="Avatar" src={data.profile_image} alt="Avatar"/>
            <div className="Name">{data.display_name}</div>
        </div>
    )
}

export default Owner;