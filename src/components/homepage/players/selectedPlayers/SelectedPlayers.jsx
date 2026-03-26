import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser, FaFlag } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    // console.log(selectedPlayers);

    const handleDelete = (player) => {
        const filtered = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers(filtered);
        setCoins(coins + player.price);
    };

    return (
        <div className='mb-16 space-y-5'>
            {
                selectedPlayers.map((player, ind) => {
                    return <div key={ind} className='flex justify-between items-center gap-6 p-10 rounded-2xl border'>
                        <div className='flex items-center gap-6'>
                            <img src={player.playerImg} alt="" className='h-24 w-48' />
                            <div>
                                <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser></FaUser> {player.playerName}</h2>
                                <p>{player.type}</p>
                            </div>
                        </div>

                        <button className='text-red-500 border border-red-500 rounded-full p-2 hover:scale-105 duration-300' onClick={() => handleDelete(player)}>
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;