import './Hooks.css'
import { useState, useEffect } from 'react'

export default function Hooks() {
   // THIS is Where you place the hooks

/**
 * crate a variable that stores an array
    with a 'base' state and a 'set' or state 
    to change to.

    Set it equal to useState('base')
    of the new 'set' states

    HERE we are going to set the base to 'select a sport'
 */
    const [sport, setSport] = useState("What's your favorite sport.")

    //FOR useEffect
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked the button ${count} times`;
    })

    return (
        <section id="hooks_section">
            <h1>React Hooks</h1> 
                
            <h1>(useState)</h1>
            
            <h4>{sport}</h4>

            <div id="hooks_buttons">   
                {/* Buttons that select the sport */}
                {/* Each button sets the new 'set' state */}
                <button onClick={() => setSport("Your favorite sport is Hockey")}>Hockey</button> 
                <button onClick={() => setSport("Your favorite sport is Golf")}>Golf</button> 
                <button onClick={() => setSport("Your favorite sport is Basketball")}>Basketball</button> 
                <button onClick={() => setSport("Your favorite sport is Beach Volleyball")}>Beach Volleyball</button> 
                <button onClick={() => setSport("Your favorite sport is Football")}>Football</button> 
            </div>

            <ul></ul>
                
            <h1>(useEffect)</h1>

            {/* The Document title */}
            <h4>You clicked the button {count} times</h4>
            {/* The button to increment by 1 */}
            <button onClick={() => setCount(count + 1)}>Click Me</button>


        </section>
    )
}