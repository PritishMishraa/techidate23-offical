import Countdown from './components/Countdown';
import Particles from './components/Particles';

function App() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className="text-white font-valorax text-9xl">
        TECHIDEATE
      </h1>
      <Countdown />
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
