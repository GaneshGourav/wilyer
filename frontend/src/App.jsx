import "./App.css";
import { Chart } from "./components/Chart";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Slider from "./components/Slider";
// import { Slider } from './components/Slider'
import { Details } from "./components/details";
import { Tracks } from "./components/track";

function App() {
  return (
    <>
      <div className="flex justify-start w-full">
        <div className="w-[200px] h-full">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <Tracks />
          <Details />
          <Slider />
          <Chart />
        </div>
      </div>
    </>
  );
}

export default App;
