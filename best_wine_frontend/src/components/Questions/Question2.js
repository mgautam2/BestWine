import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { incrementPage, decrementPage, submitQues2 } from '../../redux/action';

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
  const formData = useSelector(state => state);
  const [ocassion, setOcassion] = useState(formData.ocassion);
  const [mealPref, setMealPref] = useState(formData.mealPref);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  function handleNext() {
    dispatch(submitQues2(ocassion, mealPref));
    dispatch(incrementPage());
  }
  
  function handleBack() {
    dispatch(submitQues2(ocassion, mealPref));
    dispatch(decrementPage(ocassion, mealPref));
  }
  
  function handleChange({target}) {
    if (target.name === 'ocassion') {
      setOcassion(target.value)
    }
    else if (target.name === 'mealPref') {
      setMealPref(target.value)
    }
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
          <RadioGroup name='ocassion' value={ocassion} onChange={handleChange}>
            <FormControlLabel value='1' control={<Radio />} label='Party' />
            <FormControlLabel value='2' control={<Radio />} label='Gift' />
            <FormControlLabel value='3' control={<Radio />} label='Drink Throughout the Day' />
            <FormControlLabel value='4' control={<Radio />} label='Enjoy By Yourself' />
            <FormControlLabel value='5' control={<Radio />} label='Enjoy With Friends' />
            <FormControlLabel value='6' control={<Radio />} label='Dinner Setting' />
            <FormControlLabel value='7' control={<Radio />} label='Pair with a Meal' />
            <FormControlLabel value='8' control={<Radio />} label='Specific Craving' />
            <FormControlLabel value='9' control={<Radio />} label='I Don’t Know/ No Preference' />
          </RadioGroup>          
          <Typography variant='h4' gutterBottom>
            If you were drinking wine with a meal, what types of food would you eat?
          </Typography>
          <RadioGroup name='mealPref' value={mealPref} onChange={handleChange}>
            <FormControlLabel value='1' control={<Radio />} label='Steak, Lamb, Beef, Pork' />
            <FormControlLabel value='2' control={<Radio />} label='Chicken, poultry' />
            <FormControlLabel value='3' control={<Radio />} label='Seafood or Shellfish' />
            <FormControlLabel value='4' control={<Radio />} label='Greasy' />
            <FormControlLabel value='5' control={<Radio />} label='Other' />
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
