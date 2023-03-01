import CountDown from './components/CountDown';
import Particles from './components/Particles';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className="text-2xl text-white font-valorax md:text-9xl">
        TECHIDEATE
      </h1>
      <CountDown />
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
