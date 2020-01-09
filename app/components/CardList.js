import React from 'react';
import Card from './Card';

const CardList = ({ robots, planets }) => {

    const cardComponent = robots.map((robot, i) => {
        return (
            <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                planetname={planets[i].name}
            />
        );
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;