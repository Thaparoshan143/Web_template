import { TbFlagHeart } from "react-icons/tb";
import { Link } from "react-router-dom";

const _tempObject = [1, 2];

function App() {

  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <h1
        className="text-theme text-6xl font-bold uppercase font-mono"
      >
        Yarn + react <TbFlagHeart className="inline-block" />
      </h1>
      <div className=" w-[80%] flex flex-row justify-evenly items-center flex-wrap ">
        {
          _tempObject.map((ind) => {
            return <Card key={ind} ind={ind} />
          })
        }
      </div>
      <Link to={"/home"} className="bg-theme p-2 text-theme-w rounded-md hover:bg-theme-alt">Home</Link>
    </div>
  );
}

const Card = ({ind} : any) => {
  return (
    <div
      className="w-[15rem] h-[15rem] p-4 m-2 flex flex-col justify-evenly items-center rounded-md text-center bg-theme text-theme-w"
    >
      <span className="inline-block text-md">This is example Card Number : {ind}</span>
      <button className="bg-theme-w text-theme font-bold hover:scale-105 rounded-md mx-auto p-1 px-2">Click Me: {ind}</button>
    </div>
  )
}

export default App;
