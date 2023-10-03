import React, { useState } from 'react'
import Screen from './Screen'
import './styles.css'

function Keyboard() {
    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')

    const clickHandler = e => {
        setInputText(inputText.concat(e.target.name))
    }
    const calculateHandler = () => {
        try {
            setResult(eval(inputText))
            reset()
        }
        catch (e) {
            setErrorMessage("Something went wrong, Click X")
            reset()
        }

    }
    const reset = () => {
        setInputText('')
    }
    const backSpace = () => {
        setInputText(inputText.slice(0, -1))
        setErrorMessage("")
    }
    return (
        <div>
            <h1>{errorMessage}</h1>
            <Screen inputText={inputText} result={result}></Screen>
            <div className='buttonsContainer'>
                <button onClick={clickHandler} name="%">%</button>
                <button onClick={reset}>Reset</button>
                <button onClick={backSpace} name="X">X</button>
                <button onClick={clickHandler} name="/">/</button>
                <button onClick={clickHandler} name="7">7</button>
                <button onClick={clickHandler} name="8">8</button>
                <button onClick={clickHandler} name="9">9</button>
                <button onClick={clickHandler} name="*">*</button>
                <button onClick={clickHandler} name="4">4</button>
                <button onClick={clickHandler} name="5">5</button>
                <button onClick={clickHandler} name="6">6</button>
                <button onClick={clickHandler} name="-">-</button>
                <button onClick={clickHandler} name="1">1</button>
                <button onClick={clickHandler} name="2">2</button>
                <button onClick={clickHandler} name="3">3</button>
                <button onClick={clickHandler} name="+">+</button>
                <button onClick={clickHandler} name="00">00</button>
                <button onClick={clickHandler} name="0">0</button>
                <button onClick={clickHandler} name=".">.</button>
                <button onClick={calculateHandler} name="">=</button>
            </div>
        </div>
    )
}

export default Keyboard
