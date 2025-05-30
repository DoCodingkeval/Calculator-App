import { useState } from "react";

const Calculator = () => {
  const buttons = [
    "AC",
    "DE",
    ".",
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "/",
    "00",
    "0",
    "=",
  ];

  const [input, setInput] = useState("");

  function handleInputChange(item) {
    if (item === "AC") {
      setInput("");
    } else if (input === "0") {
      setInput(item);
    } else if (item === "DE") {
      setInput(input.slice(0, -1));
    } else if (item == "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + item);
    }
  }

  return (
    <div
      className="h-[100vh] w-[100vw] flex items-center justify-center max-sm:p-5
    md:w-[70vw] md:m-auto
    "
    >
      <div className="main bg-white max-sm:w-full max-sm:h-130 rounded-4xl border-2 p-5">
        <div className="w-full flex items-center h-35 overflow-hidden rounded-2xl border-8 border-black bg-[#6F96B3] text-7xl text-white">
          <input
            className="w-full text-right outline-none truncate"
            type="text"
            value={input}
          />
        </div>
        <div
          className="w-full max-sm:w-full grid grid-cols-4
         max-sm:gap-4 max-sm:py-5 
         md:gap-7 md:py-5 md:ml-2
         text-2xl font-bold"
        >
          {buttons.map((item, index) => {
            let btnstyle = "";

            if (
              ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
                item
              )
            ) {
              btnstyle = "bg-[#C7C2BE]";
            } else if ([".", "+", "-", "*", "/", "%"].includes(item)) {
              btnstyle = "bg-[#3D91D0]";
            } else if (["="].includes(item)) {
              btnstyle = "bg-[#E9D10D]";
            } else if (["AC"].includes(item)) {
              btnstyle = "bg-[crimson]";
            } else if (["DE"].includes(item)) {
              btnstyle = "bg-[#53CAA2]";
            }

            return (
              <button
                key={index}
                className={`h-[9vh] w-[9vw] cursor-pointer max-sm:h-12 max-sm:w-12 rounded-lg last:w-[32vw] md:last:w-[26vw] ${btnstyle}`}
                onClick={() => handleInputChange(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
