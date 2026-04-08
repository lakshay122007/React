import {useState} from 'react'

export default function InputComp(){
    const [inputVal, setInput] = useState("")

    function handleInput(e){
        console.log(e.target.value)
        setInput(e.target.value) //state changes, inputVal = NA, component rerenders 
    }
    return (
        <input 
        type='text' 
        onChange = {handleInput} 
        placeholder='Enter Password'
        value = {inputVal}>

        </input>
    )
}

