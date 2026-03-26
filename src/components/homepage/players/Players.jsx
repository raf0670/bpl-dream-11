import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");

    return (
        <div className=''>

            <div className='flex justify-between my-12 items-center'>
                <h2 className='font-bold text-2xl'>{selectedType == "available" ? `Available Player` : `Selected (0/6)`}</h2>

                <div>
                    <button onClick={() => setSelectedType("available")} className={`${selectedType == "available" ? `bg-[#E7FE29] text-black` : `bg-white text-gray-500`} p-1 px-5 font-semibold outline outline-gray-100 rounded-r-none rounded-xl hover:scale-105 duration-500`}>Available</button>
                    <button onClick={() => setSelectedType("selected")} className={`${selectedType == "selected" ? `bg-[#E7FE29] text-black` : `bg-white text-gray-500`} p-1 px-5 font-semibold outline outline-gray-100 rounded-l-none rounded-xl hover:scale-105 duration-500`}>Selected (0)</button>
                </div>
            </div>

            {selectedType == "available" ? <AvailablePlayers players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;