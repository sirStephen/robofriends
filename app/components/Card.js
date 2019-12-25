import React from 'react';
import './Card';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                src={`https://robohash.org/${id}?size=200x200`}
                alt="robots"/>
            <div>
                <p className='robot-name'>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;