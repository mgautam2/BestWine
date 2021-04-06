import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {incrementPage, decrementPage } from '../../redux/action';

function Question1() {
  let dispatch = useDispatch();
  
  function handleNext() {
    dispatch(incrementPage());
  }
  function handleBack() {
    dispatch(decrementPage());
  }
  
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
            What type of wine are you looking for? Select One.
          </Typography>
          <RadioGroup name='ques1' >
            <FormControlLabel value='red' control={<Radio />} label='Red' />
            <FormControlLabel value='white' control={<Radio />} label='White' />
            <FormControlLabel value='rose' control={<Radio />} label='Rosé' />
            <FormControlLabel value='na' control={<Radio />} label='I Don’t Know/No Preference' />
          </RadioGroup>
          
          <Typography variant='h4' gutterBottom>
            How much are you willing to spend on wine today? Select One.
          </Typography>
          <RadioGroup name='ques2' >
            <FormControlLabel value='' control={<Radio />} label='< $10' />
            <FormControlLabel value='' control={<Radio />} label='$10-15' />
            <FormControlLabel value='' control={<Radio />} label='$15-20' />
            <FormControlLabel value='' control={<Radio />} label='> $20' />
          </RadioGroup>
          
          <Typography variant='h4' gutterBottom>
            What quality of wine are you looking for?
          </Typography>
          <RadioGroup name='ques2' >
          <FormControlLabel value='red' control={<Radio />} label='Soundly made' />
          <FormControlLabel value='white' control={<Radio />} label='Very good' />
          <FormControlLabel value='rose' control={<Radio />} label='Outstanding' />
          <FormControlLabel value='rose' control={<Radio />} label='Beyond Outstanding' />
          <FormControlLabel value='na' control={<Radio />} label='I Don’t Know/No Preference' />
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

export default Question1;