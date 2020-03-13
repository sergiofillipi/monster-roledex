import React from 'react';
import './card.component.css';
export const Card = (props) =>{
    return (
        <div className="card-container">
            <img alt="" src= { `https://robohash.org/${ props.id }?set=set2&size=180x180` } />
           <h2 key={ props.id } >{props.name}</h2>
        </div>
    )
}