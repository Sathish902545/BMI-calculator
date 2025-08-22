import React, { useState } from 'react'
import './App.css'

function App() {

const [height,setHeight] = useState('');
const [weight,setWeight] = useState('');
const [bmi,setBmi] = useState(null);
const [bmistatus,setBmistatus] = useState('');
const [errorMessage,setErrorMessage] = useState('');


const calculateBmi = () => {
    if(height&&weight){
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue < 18.5){
            setBmistatus('underweight');
        }else if (bmiValue >= 18.5 && bmiValue <24.9){
            setBmistatus('normal weight')
        }else if (bmiValue >=25 && bmiValue <29.0 ){
            setBmistatus('overweight')
        }else{
            setBmistatus('Obese');
        }
        setErrorMessage('');
    }else{
        setBmi(null);
        setBmistatus('')
        setErrorMessage('please enter valid numberc values for height and weight.')
    }
};

const clearAll = () => {
    setHeight('')
    setWeight('')
    setBmi(null);
    setBmistatus('')
};

  return (
    <>
    <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
            <h1>BMI Calculator</h1>
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <div className="inpu-container">
                <label htmlFor='height'>Height (cm):</label>
                <input type="number" id='height' value={height}
                 onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="inpu-container">
                <label htmlFor='height'>Weight (kg):</label>
                <input type="number" id='height' value={weight} 
                onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            {bmi!==null && (<div className='result'>
                <p>Your BMI is: {bmi}</p>
                <p>Status: {bmistatus}</p>
            </div>)}
        </div>
    </div>
    </>
  )
}

export default App
