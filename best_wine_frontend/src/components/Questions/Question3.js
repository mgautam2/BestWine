import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import {incrementPage, decrementPage } from '../../redux/action';

function Question3() {
  const [alignment, setAlignment] = React.useState('left');
  const dispatch = useDispatch();
  
  function handleNext() {
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(decrementPage());
  }
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (
    <div >
      <AppBar position='static' >
        <Typography variant='h4' color='inherit'>
          Wine Recommendation System
        </Typography>
      </AppBar>
      <div className='formPage'>
        
        <div className='formDiv'>
          
          <Typography variant='h4' gutterBottom>
            On a scale of 1 to 10, how much do you like drinking sweet beverages?
          </Typography>
          <ToggleButtonGroup
            size='large'
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            <div>
              I Hate It
            </div>
            <ToggleButton value='1'>
              1
            </ToggleButton>
            <ToggleButton value='2'>
              2
            </ToggleButton>
            <ToggleButton value='3'>
              3
            </ToggleButton>
            <ToggleButton value='4'>
              4
            </ToggleButton>
            <ToggleButton value='5'>
              5
            </ToggleButton>
            <ToggleButton value='6'>
              6
            </ToggleButton>
            <ToggleButton value='7'>
              7
            </ToggleButton>
            <ToggleButton value='8'>
              8
            </ToggleButton>
            <ToggleButton value='9'>
              9
            </ToggleButton>
            <ToggleButton value='10'>
              10
            </ToggleButton>
            <div>
              I Love It
            </div>
          </ToggleButtonGroup>
          
          <Typography variant='h4' gutterBottom>
            How tannic would you prefer your wine? “Tannic” refers to the amount of tannins in a wine which causes a drying sensation in your mouth.  
          </Typography>
          <RadioGroup name='ques2' >
            <FormControlLabel value='1' control={<Radio />} label='Low in Tannins' />
            <FormControlLabel value='2' control={<Radio />} label='Medium in Tannins' />
            <FormControlLabel value='3' control={<Radio />} label='High in Tannins' />
            <FormControlLabel value='4' control={<Radio />} label='I Don’t Know/ No Preference' />
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
            Next
          </Button>
        </div>
      </div>
    </div>
   )
}

export default Question3;
