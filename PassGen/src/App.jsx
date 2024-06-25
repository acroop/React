import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length, setLength] = useState(6);
  const [NumbersAllowed, setNumbersAllowed] = useState(false);
  const [CharactersAllowed, setCharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumbersAllowed) str+="0123456789";
    if (CharactersAllowed) str+="~`!@#$%^&*-_<>?/.,";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    
  }, [length, NumbersAllowed, CharactersAllowed, setPassword])

  const CopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, NumbersAllowed, CharactersAllowed, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md px-4 my-8 bg-gray-700 rounded-lg mx-auto shadow-md text-orange-500 ">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={Password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly 
        ref={passwordRef}/>
        <button onClick={CopyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-6 ">
        <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={12}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className="pointer-cursor"/>
            <label>Length : {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked= {NumbersAllowed}
          onChange={() => {
            setNumbersAllowed((prev) => !prev);
          }} />
          <label >Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {CharactersAllowed}
          onChange={() => {
            setCharactersAllowed((prev) => !prev);
          }}/>
          <label >Characters</label>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
