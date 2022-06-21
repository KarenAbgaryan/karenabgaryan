import './App.css';
import React, { useEffect, useState } from "react";



function App() {
    const [array, setArray] = useState([])
    const [inpVal, setImpVal] = useState('1')
    const [showId, setShowId] = useState(0)
    
    return (
        <div className="App">
            <input type='text' value={inpVal} onChange={(e) => {
                if (e.target.value <= 100) {
                    setImpVal(e.target.value)
                }
                
                }} />
            <button onClick={() => {
                const objAmount = (b) => {
                    for (let i = 0; i < b; i++) {
                        array.push({
                            id: Math.random(),
                            num: Math.floor(Math.random() * 100),
                            color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                        })
                    
                    }
                }
                objAmount(inpVal)
                setArray([...array])
            }}>Add</button>
            <button onClick={() => {
                setArray(array.sort((a, b) => a.num - b.num))
                setArray([...array])
            }}>Sort</button>
            <div className='numContainer'>
                {array.map(({ id, num, color }) => {
                    return <div
                        key={id}
                        className="numChild"
                        style={{ backgroundColor: color }}
                        onClick={() => setShowId(id)}
                        >{num} {showId === id && <p>{id}</p>} <button onClick={() => {
                            setArray(array.filter((arr) => arr.id !== id))
                        }}>X</button></div>
                })}
            </div>
        </div>
    );
}

export default App;

