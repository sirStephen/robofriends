import React from 'react';
import './Card.css';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

const Card = ({ id, name, email, planetname }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card-width'>
            <img 
                src={`https://robohash.org/${id}?size=200x200`}
                alt="robots"/>
            <div className='tl'>
                <p className='robot-name flex'><span className='pr'><FaUser /></span>{name}</p>
                <p className='flex'><MdEmail className='pr'/>{email}</p>
                <p className='flex'><TiWorld className='pr'/>{planetname}</p>
            </div>
        </div>
    );
}

export default Card;