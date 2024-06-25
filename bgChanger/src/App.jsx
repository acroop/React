import { useState } from "react"


function App() {
  const [colour, setColour] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-12">
        <div className="fixed flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-slate-400">
          <button onClick={() => setColour("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "red" }}>Red</button>
          <button onClick={() => setColour("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ background: "white" }}>White</button>
          <button onClick={() => setColour("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "blue" }}>Blue</button>
          <button onClick={() => setColour("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "green" }}>Green</button>
          <button onClick={() => setColour("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ background: "yellow" }}>Yellow</button>
          <button onClick={() => setColour("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "indigo" }}>Indigo</button>
          <button onClick={() => setColour("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ background: "violet" }}>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
