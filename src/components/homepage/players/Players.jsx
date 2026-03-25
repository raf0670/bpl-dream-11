import React, { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise);
    // console.log(players);
    return (
        <div className=''>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;