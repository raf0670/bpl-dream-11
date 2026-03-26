import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import Navbar from './components/navbar'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  const [coins, setCoins] = useState(50000000);
  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner></Banner>

      <Suspense fallback={<div className='flex gap-5 justify-center items-center p-10'>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>}>
        <Players playersPromise={playersPromise} setCoins={setCoins} coins={coins}></Players>
      </Suspense>
    </>
  )
}

export default App
