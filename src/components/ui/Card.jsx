import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player, setCoins, coins }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        const newCoins = coins - player.price;
        if (newCoins < 0) {
            alert(`${player.playerName} cannot be selected for money!`);
            return;
        }
        setIsSelected(true);
        setCoins(newCoins);
        alert(`${player.playerName} selected!`)
    };

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    className='w-svw h-52'
                    src={player.playerImg}
                    alt="Player Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser></FaUser>{player.playerName}</h2>
                <div className='flex items-center justify-between text-gray-500'>
                    <div className='flex items-center gap-2'>
                        <FaFlag></FaFlag>
                        <p>{player.country}</p>
                    </div>
                    <button className='btn btn-sm'>{player.type}</button>
                </div>

                <div className='divider'></div>

                <h2 className='font-bold'>Rating: {player.rating}</h2>

                <div className='flex justify-center font-semibold'>
                    <p className=''>{player.battingStyle}</p>
                    <p className='text-end'>{player.bowlingStyle}</p>
                </div>

                <div className='card-actions items-center'>
                    <p className='font-semibold'>Price: ${player.price}</p>
                    {isSelected == false ? <button onClick={handleChoosePlayer} className='btn btn-sm'>Choose Player</button> :
                        <button className='btn btn-sm text-gray-400'>Selected</button>}
                </div>
            </div>
        </div>
    );
};

export default Card;