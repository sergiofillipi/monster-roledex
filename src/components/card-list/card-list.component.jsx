import React from 'react';
import "./card-list.component.css";
import { Card } from '../card/card.component.jsx'
export const CardList = (props) => {
    return <div className="card-list">
        {props.monsters.map((monster) => {
            return (
            <div key={ 'wrap' + monster.id }>
                <Card id={ monster.id } name={ monster.name }/>
            </div>
            )
        })}
    </div>
}