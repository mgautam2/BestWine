import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';

import { incrementPage, decrementPage, submitQues4 } from '../../redux/action';

function Question4() {
 const formData = useSelector(state => state); 
  const [age, setAge] = useState();
  const [freq, setFreq] = useState(formData.freq);
  const dispatch = useDispatch();

  
  function handleNext() {
    dispatch(submitQues4(age, freq));
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(submitQues4(age, freq));
    dispatch(decrementPage());
  }
  
  function handleChange({target}) {
    if (target.name === 'age') {
      setAge(target.value)
    }
    else if (target.name === 'freq') {
      setFreq(target.value)
    }
  } 
  
  return (
    <div>
      <AppBar position='static'>
        <Typography variant='h4' color='inherit'>
          Wine Recommendation System
        </Typography>
      </AppBar>
      <div className='formPage'>
        <div className='formDiv'>
          <Typography variant='h4' gutterBottom>
            What is your age?
          </Typography>
          <Input
            name='age'
            value={age}
            autoComplete='off'
            onChange={handleChange}
            placeholder="Enter you age" 
          />
          
          <Typography variant='h4' gutterBottom>
            How often do you drink wine?
          </Typography>
          <RadioGroup name='freq' value={freq} onChange={handleChange}>
            <FormControlLabel value='1' control={<Radio />} label='Not at all Often' />
            <FormControlLabel value='2' control={<Radio />} label='Somewhat Often' />
            <FormControlLabel value='3' control={<Radio />} label='Very Often' />
          </RadioGroup>
          <Button
            color='primary'
            variant='contained'
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={handleNext}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
   )
}

export default Question4;
