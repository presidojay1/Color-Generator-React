import React, {useState} from 'react'
import './App.css';


function App() {
  const [background, setBackground] = useState("#071415")
  const [colorname, setColorName] = useState('')
  const [colors, setColors] = useState([
    "#9253a1",
    "#f063a4",
    "#2dc5f4",
    "ec015a",
  ])
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    setColors([...colors, colorname])
    setColorName('')
  }
  return (
    <div className="App" style={{ background : background}}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={colorname} onChange={(e)=> setColorName(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div style={{
              background: color, filter: "brightness()86%", boxShadow: color ===background ? "0 0 5px #000" : ""}} className="box" onClick={() =>setBackground(color)} />
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;
