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
 const formData = useSelector(state => state.preferenceData); 
  const [age, setAge] = useState();
  const [freq, setFreq] = useState(formData.Freq);
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
      <AppBar position='static' style={{background: '#f8f1ed'}} >
        <Typography variant='h5'
          style={{
            margin: '5px',
            marginLeft: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000000'
          }}
        >
          BestWine
        </Typography>
      </AppBar>

      <div style={{background: '#f8f1ed', height: 'calc(100vh - 42px)'}}>
      <div className='formPage'>
        <div className='formDiv'>
          <Typography variant='h6' gutterBottom>
            What is your age?
          </Typography>
          <Input
            name='age'
            value={age}
            autoComplete='off'
            onChange={handleChange}
            placeholder="Enter you age" 
            style={{marginLeft: '5%', marginBottom: '25px'}}
          />
          
          <Typography variant='h6' gutterBottom>
            How often do you drink wine?
          </Typography>
          <div style={{marginLeft: '5%', marginBottom: '5px'}}>
            <RadioGroup name='freq' value={freq} onChange={handleChange}>
              <FormControlLabel value='1' control={<Radio />} label='Not at all Often' />
              <FormControlLabel value='2' control={<Radio />} label='Somewhat Often' />
              <FormControlLabel value='3' control={<Radio />} label='Very Often' />
            </RadioGroup>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Button
              style={{background: '#bed596', color: '#000000', margin: '5px', paddingLeft: '35px', paddingRight: '35px'}}
              variant='contained'
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              style={{background: '#bed596', color: '#000000', margin: '5px',  paddingLeft: '35px', paddingRight: '35px'}}
              variant='contained'
              onClick={handleNext}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
   )
}

export default Question4;
