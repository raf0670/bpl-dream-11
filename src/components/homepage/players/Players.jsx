import React, { use } from 'react';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
    console.log(data);
    return (
        <div>
        </div>
    );
};

export default Players;