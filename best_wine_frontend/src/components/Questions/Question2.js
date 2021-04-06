import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {incrementPage, decrementPage } from '../../redux/action';

const useStyles = makeStyles(() => ({
  ratingRadioGp: {
    display: 'flex',
    flexDirection: 'row',
    border: 'red 2px dotted',
    justifyContent: 'center',
    fontSize: '10px'
  },
  ratingBtn: {
    
  }
}));


function Question1() {
  const classes = useStyles();
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
            What is the occasion you want this wine for? Check all that apply.
          </Typography>
          <RadioGroup name='ques1'>
            <FormControlLabel value='low' control={<Radio />} label='Party' />
            <FormControlLabel value='medium' control={<Radio />} label='Gift' />
            <FormControlLabel value='high' control={<Radio />} label='Drink Throughout the Day' />
            <FormControlLabel value='na' control={<Radio />} label='I Don’t Know/ No Preference' />
          </RadioGroup>
          
          <Typography variant='h4' gutterBottom>
            If you were drinking wine with a meal, what types of food would you eat?
          </Typography>
          <RadioGroup name='ques2'>
            <FormControlLabel value='' control={<Radio />} label='Steak, Lamb, Beef, Pork' />
            <FormControlLabel value='' control={<Radio />} label='Chicken, poultry' />
            <FormControlLabel value='' control={<Radio />} label='Seafood or Shellfish' />
            <FormControlLabel value='' control={<Radio />} label='Greasy' />
            <FormControlLabel value='' control={<Radio />} label='Other' />
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
