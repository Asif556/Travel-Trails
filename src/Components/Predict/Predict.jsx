import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Predict.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const Predict = (props) => {
  const [prediction, setPrediction] = useState(null); 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const a=useNavigate();
  const changetoWeather=()=>{
    a(`/Weather${props.state}`);
  }

  const onSubmit = (data) => {
    const apiUrl = `http://127.0.0.1:5000/predict/${data.hp}/${data.sa}/${data.fc}/${data.tc}/${props.state}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setPrediction(parseInt(data.prediction)); 
    })
    .catch(error => {
      console.error('Error:', error);
      setPrediction("Error fetching prediction. Please try again later.");
    });
  };

  return (
    <div>
      <Navbar />
      <div className='Predict'>
      <p className='note'> "Note that: the prices displayed are based on a 7-day tourism duration."</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form'>
            <label>Selected Place: <span style={{ color: 'darkblue' }}>{props.state}</span></label>
          </div>

          <div className='form'>
            <label>Enter Hotel Price:</label>
            <input type="number" {...register("hp", { required: true })} />
            {errors.hp && <span>This field is required</span>} 
          </div>
          
          <div className='form'>
            <label>Enter Self Allowance:</label>
            <input type="number" {...register("sa", { required: true })} />
            {errors.sa && <span>This field is required</span>} 
          </div>

          <div className='form'>
            <label>Enter Food Cost:</label>
            <input type="number" {...register("fc", { required: true })} />
            {errors.fc && <span>This field is required</span>} 
          </div>

          <div className='form'>
            <label>Enter Travel Cost:</label>
            <input type="number" {...register("tc", { required: true })} />
            {errors.tc && <span>This field is required</span>} 
          </div>

          <div className='submit'>
            <input type="submit" value="Predict" className='submitbtn' />
          </div>
        </form>

        <p className='ans'>
          Predicted Price : {prediction !== null ? prediction : "No prediction made yet"}
        </p>
        <div className="btn">
          <button id='btn' onClick={changetoWeather}>Check The Weather</button>
        </div>
      </div>
    </div>
  );
}

export default Predict;
