import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { incrementPage, decrementPage, submitQues2 } from '../../redux/action';

function Question1() {
  const formData = useSelector(state => state.preferenceData);
  const [ocassion, setOcassion] = useState(formData.Activities);
  const [mealPref, setMealPref] = useState(formData.MealPref);
  const dispatch = useDispatch();
  
  function handleNext() {
    dispatch(submitQues2([ocassion], mealPref));
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
            <FormControlLabel value='Party' control={<Radio />} label='Party' />
            <FormControlLabel value='Gift' control={<Radio />} label='Gift' />
            <FormControlLabel value='Drink Throughout the Day' control={<Radio />} label='Drink Throughout the Day' />
            <FormControlLabel value='Enjoy By Yourself' control={<Radio />} label='Enjoy By Yourself' />
            <FormControlLabel value='Enjoy With Friends' control={<Radio />} label='Enjoy With Friends' />
            <FormControlLabel value='Dinner Setting' control={<Radio />} label='Dinner Setting' />
            <FormControlLabel value='Pair with a Meal' control={<Radio />} label='Pair with a Meal' />
            <FormControlLabel value='Specific Craving' control={<Radio />} label='Specific Craving' />
            <FormControlLabel value='No Pref' control={<Radio />} label='I Don’t Know/ No Preference' />
          </RadioGroup>          
          <Typography variant='h4' gutterBottom>
            If you were drinking wine with a meal, what types of food would you eat?
          </Typography>
          <RadioGroup name='mealPref' value={mealPref} onChange={handleChange}>
            <FormControlLabel value='Steak, Lamb, Beef, Pork' control={<Radio />} label='Steak, Lamb, Beef, Pork' />
            <FormControlLabel value='Chicken, poultry' control={<Radio />} label='Chicken, poultry' />
            <FormControlLabel value='Seafood or Shellfish' control={<Radio />} label='Seafood or Shellfish' />
            <FormControlLabel value='Greasy' control={<Radio />} label='Greasy' />
            <FormControlLabel value='Other' control={<Radio />} label='Other' />
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
