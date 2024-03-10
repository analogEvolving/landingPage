import "./App.css";
import FadedButton from "./components/FadedButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col sm:flex-row py-4 sm:py-2 justify-around items-center bg-gradient-to-r from-ultra-violet-500 to-dog-tongue-500">
        <img
          className="rounded-full border-2 border-white shadow-lg m-4"
          src="https://amber-genuine-frog-385.mypinata.cloud/ipfs/QmdnttUULgb2rRFgsPeChyQ1WDVg5kue4Fwy3RUCPvKUpt/tokenImage.jpeg" // Replace with the dog photo URL
          width={100}
          height={100}
          alt="Doggo"
        />
        <a
          href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x152F0d588890Ef433814e6D83f72b062B52cb466"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-buy-now"
        >
          BUY NOW
        </a>
      </header>

      <main className="flex-grow container mx-auto my-20 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ultra-violet-500 to-dog-tongue-500">
          BUY $ANAL
        </h1>
        <p className="my-6 text-center text-lg ">
          {"ON ANAL YOU HAVE GOT TO START SLOW AND GRIND YOUR WAY IN"}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col space-y-4 p-4 rounded-lg ">
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
          <img
            className="rounded-lg shadow-lg"
            src="https://amber-genuine-frog-385.mypinata.cloud/ipfs/QmdnttUULgb2rRFgsPeChyQ1WDVg5kue4Fwy3RUCPvKUpt/tokenImage.jpeg"
            width={240}
            alt="Doggo"
          />
        </div>
      
      </main>
      <section className="my-8 px-6 py-12 bg-gradient-to-r from-ultra-violet-500 to-dog-tongue-500 text-center text-white font-bo">
      <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text bg-white">
        ANALOGIC CULT
        </h1>
        <p className="my-6 text-center text-lg font-bold">
          {"We are a cult. We cherish moments. We never fast-forward. Expect nostalgia."}
        </p>
  <ul className=" text-lg mx-auto leading-relaxed max-w-2xl">
    <li>
    We Are $ANAL.
    </li>
    <li>
    We Resist TECH.
    </li>
    <li>
    We Are A CULT.
    </li>
    <li>
    We Cherish Moments.
    </li>
    <li>
    We Never Fast-Forward.
    </li>
        Expect Nostalgia.
  </ul>
</section>


<footer className="">
  <div className="container mx-auto px-4 ">
    <div className="tokenomics text-center py-14 space-y-2">
      <h3 className="text-xl font-bold ">TOKENOMICS</h3>
      <div className="font-thin py-10">
      <p >69.420B $ANAL</p>
      <p>No presale</p>
      <p>No taxes</p>
      <p>No BS</p>
      <p className="font-bold text-sm mt-2">
        0x152F0d588890Ef433814e6D83f72b062B52cb466
      </p>

      </div>
      <div id="dexscreener-embed"><iframe src="https://dexscreener.com/avalanche/0xC600CA3F720ecaD91384C0D53E35F068671E1D8b?embed=1&theme=dark&trades=0"></iframe></div>
    </div>
    <div className="border-t py-6">
      <img
        className="mx-auto w-32"
        src="https://amber-genuine-frog-385.mypinata.cloud/ipfs/QmdnttUULgb2rRFgsPeChyQ1WDVg5kue4Fwy3RUCPvKUpt/poweredByAvalanche.svg"
        alt="Powered by Avalanche"
      />
    </div>
  </div>
  
</footer>

    </div>
  );
}

export default App;
