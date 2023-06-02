import { Hero } from "./components/Hero";
import { Demo } from "./components/Demo"; // Importing Demo as a named export

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
