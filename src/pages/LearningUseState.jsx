import { useState } from "react";


function LearnUseState (){

    // const [name, setName] = useState("Rupesh") // ["Rupesh",f]
    const [counter,setCounter] = useState(0)
    // let counter = 0
    function increaseCounter(){
       setCounter(counter + 1)
        // counter++
 }
    function decreaseConuter(){
        setCounter(counter -1)
    }
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseConuter}>-</button>
        </>
    )
}
export default LearningUseState