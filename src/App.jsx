import './App.css';
import FadedButton from './components/FadedButton';

function App() {
  return (
    <>
      <header className="flex py-2 justify-around items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <img
          className="rounded-full border-2 border-white absolute top-4 sm:left-[20%]"
          src={'/public/tokenImage.jpeg'}
          width={100}
          height={100}
          alt=""
        />
        <div className="h-14"></div>
        <a
          href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x152F0d588890Ef433814e6D83f72b062B52cb466"
          target="_blank"
          className="h-10 w-[100px] hidden sm:flex text-gray-800 bg-white rounded shadow-xl hover:scale-110 duration-150 items-center justify-center"
        >
          BUY NOW
        </a>
      </header>
      <div className="flex h-[90%] flex-col items-center px-28 pt-28">
        <h1 className="mb-12 text-4xl text-nowrap text-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          BUY $ANAL
        </h1>
        <div className="flex items-center gap-32">
          <div className="flex flex-col gap-4">
            <FadedButton
              link="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x152F0d588890Ef433814e6D83f72b062B52cb466"
              text="Trader Joe"
            />
            <FadedButton
              link="https://dexscreener.com/avalanche/0x152F0d588890Ef433814e6D83f72b062B52cb466"
              text="Dexscreener"
            />
            <FadedButton link="https://twitter.com/ANALevolving" text="X" />
            <FadedButton link="https://t.me/ANALevolving" text="Telegram" />
          </div>
          <div className="hidden md:block">
            <img src="/public/tokenImage.jpeg" width={240} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-white py-16 bg-purple-500">
        <span className="font-bold mb-2">TOKENOMICS</span>
        <span className="mb-2">69.420B $ANAL</span>
        <span>No presale</span>
        <span>No taxes</span>
        <span>No BS</span>
        <span className="mt-2 font-bold text-xs">
          0x152F0d588890Ef433814e6D83f72b062B52cb466
        </span>
      </div>
      <div className="flex justify-center py-4">
        <img
          className="w-32"
          src="/public/poweredByAvalanche.svg"
          alt="Powered by Avalanche"
        />
      </div>
    </>
  );
}

export default App;
