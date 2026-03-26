import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoins, coins }) => {
    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className=''>

            <div className='flex justify-between my-12 items-center'>
                <h2 className='font-bold text-2xl'>{selectedType === "available" ? `Available Player` : `Selected (${selectedPlayers.length}/${players.length})`}</h2>

                <div>
                    <button onClick={() => setSelectedType("available")} className={`${selectedType === "available" ? `bg-[#E7FE29] text-black` : `bg-white text-gray-500`} p-1 px-5 font-semibold outline outline-gray-100 rounded-r-none rounded-xl hover:scale-105 duration-500`}>Available</button>
                    <button onClick={() => setSelectedType("selected")} className={`${selectedType === "selected" ? `bg-[#E7FE29] text-black` : `bg-white text-gray-500`} p-1 px-5 font-semibold outline outline-gray-100 rounded-l-none rounded-xl hover:scale-105 duration-500`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedType === "available" ? <AvailablePlayers players={players} setCoins={setCoins} coins={coins} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoins={setCoins} coins={coins}></SelectedPlayers>}
        </div>
    );
};

export default Players;