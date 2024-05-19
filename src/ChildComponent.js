import React,{useState,useEffect,useRef} from 'react'

 function ChildComponent({ getNewResult }) {
	const titleRef=useRef()
	const [result, setResult] = useState()
	const [inputValue,setInputValue]=useState('')

	// Function to handle button click
	const handleClick = () => {
		const newResult = getNewResult()
		setResult(newResult)
		titleRef.current.focus()
	}

	useEffect(()=>{
		console.log("Title Ref",titleRef)
	},[titleRef])


	return (
		<div>
			<input
			ref={titleRef}
			// disabled={true} //it disables the input so that it can not be interacted
			value={inputValue}
			onChange={(e)=>setInputValue(e.target.value)}
			// readOnly
			/>
			<button id="button" onClick={handleClick}>
				Press Me
			</button>
			{result && <span id="result">{result}</span>}
		</div>
	)
}
export default ChildComponent