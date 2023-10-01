import "./App.css";
import { InputBox } from "./components";
function App() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen mx-auto">
      <h1 className="text-center text-2xl text-bold mb-5">
        Simple Currency Converter
      </h1>

      <div className="h-[400px] w-[500px] mx-auto bg-gray-200 flex flex-col justify-start items-center">
        <div className="bg-blue-500 w-full h-[8px]"></div>
        <div className="flex flex-col justify-center items-center mb-[30px]">
          <h3 className="mt-[10px] text-lg text-gray-500">Exchange Rate</h3>
          <div className="text-5xl font-bold text-gray-700 mt-2">$300.24</div>
        </div>

        <div className="w-[80%]  max-h-max flex flex-col">
          <div className="mb-[10px]">
            <label>Amount</label>
            <input
              defaultValue={0}
              className="w-full h-[40px] mt-[10px] p-[10px]"
              type="number"
            />
          </div>
          <div>
            <InputBox />
          </div>
          <div>
            <button className="w-full h-[40px] bg-blue-500 text-white mt-[20px]">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
