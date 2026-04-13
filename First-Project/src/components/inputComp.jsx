// import {useState} from 'react'

// export default function InputComp(){
//     const [inputVal, setInput] = useState("")
//     const [isEmpty, setIsEm] = useState(true)

//     function handleInput(e){
//         console.log(e.target.value)
//         setInput(e.target.value) //state changes, inputVal = NA, component rerenders 
//         if(e.target.value.length > 0) setIsEm(false)
//     }


//     }
//     return (
//         <div>
//             <form>

//                 <input 
//                 type='text' 
//                 onChange = {handleInput} 
//                 placeholder='Enter Password'
//                 value = {inputVal}
//                 >

//                 </input>
//                 <p>{inputVal.length < 8 ? "Password is too Short" : "Valid password"}</p>
//                 <button>Submit</button>

//             </form>
//         </div>


//     )


